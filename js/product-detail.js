/**
 * Refined Product Detail Engine
 */
let currentProduct = null;
let currentQuantity = 1;

function loadProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));
  
  const container = document.getElementById('product-container');
  if (!container) return;

  currentProduct = allProducts.find(p => p.id === productId);

  if (!currentProduct) {
    container.innerHTML = `<div style="padding: 100px; text-align: center;"><h1>Product Not Found</h1><a href="shop.html" class="btn-luxe">Back to Shop</a></div>`;
    return;
  }

  document.title = `${currentProduct.name} | Fresh Milk Shop Heritage`;

  container.innerHTML = `
    <div class="product-gallery">
      <img src="${currentProduct.image}" alt="${currentProduct.name}">
    </div>
    <div class="product-info">
      <div class="product-meta">
        <span>${currentProduct.category}</span>
        <span>•</span>
        <span>${currentProduct.weightMin} Min. Order</span>
      </div>
      <h1>${currentProduct.name}</h1>
      
      <div class="product-rating">
        <span>★★★★★</span>
        <span>(4.9 / 5.0)</span>
        <span>• 250+ Verified Orders</span>
      </div>

      <div class="product-price">
        ₹${currentProduct.price} <span>${currentProduct.priceLabel}</span>
      </div>
      
      <p class="product-desc">${currentProduct.description}</p>
      
      <div class="specs-list">
        <div class="spec-item"><span>Availability</span> <strong>In Stock</strong></div>
        <div class="spec-item"><span>Delivery Area</span> <strong>City Center, New Delhi</strong></div>
        <div class="spec-item"><span>Farm Source</span> <strong>${currentProduct.farmSource}</strong></div>
        <div class="spec-item"><span>Shelf Life</span> <strong>${currentProduct.shelfLife}</strong></div>
      </div>

      <div class="product-actions">
        <div class="quantity-control">
          <button class="qty-btn" onclick="updateQty(-1)">-</button>
          <span id="qty-val" style="min-width: 30px; text-align: center; font-weight: 700;">${currentQuantity}</span>
          <button class="qty-btn" onclick="updateQty(1)">+</button>
        </div>
        
        <div class="cta-group">
          <button class="btn-luxe" onclick="addCurrentToCart()">Add to Order</button>
          <button class="btn-outline" onclick="window.location.href='checkout.html'">Checkout Now</button>
        </div>
      </div>

      <div class="product-features">
        <h3 style="font-size: 1.1rem; margin-bottom: 20px;">Why Choose This?</h3>
        <ul style="list-style: none; padding: 0;">
          ${currentProduct.benefits.map(b => `<li style="font-size: 0.9rem; margin-bottom: 12px; display: flex; align-items: start; gap: 10px; color: var(--text-secondary);"><span style="color: var(--accent-gold); font-weight: 900;">✓</span> ${b}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  // Init first tab
  switchDetailTab('description');
  renderRelated(currentProduct.category, currentProduct.id);
}

window.updateQty = function(change) {
  currentQuantity = Math.max(1, currentQuantity + change);
  const qtyEl = document.getElementById('qty-val');
  if (qtyEl) qtyEl.innerText = currentQuantity;
};

window.addCurrentToCart = function() {
  for (let i = 0; i < currentQuantity; i++) {
    addToCart(currentProduct.id);
  }
  // Reset for next
  currentQuantity = 1;
  const qtyEl = document.getElementById('qty-val');
  if (qtyEl) qtyEl.innerText = 1;
};

window.switchDetailTab = function(tab) {
  const content = document.getElementById('tab-content');
  const links = document.querySelectorAll('.tab-link');
  
  links.forEach(l => {
    l.classList.remove('active');
    if (l.innerText.toLowerCase() === tab) l.classList.add('active');
  });

  if (tab === 'description') {
    content.innerHTML = `
      <div style="max-width: 700px;">
        <p>${currentProduct.description}</p>
        <p style="margin-top: 20px;">At Fresh Milk Shop, the quality of our dairy starts with the soil. By feeding our cows only organic, chemical-free fodder, we ensure that every bottle of milk is filled with natural purity and high-grade nutrients.</p>
        
        <h3>Nutritional Values <small>(per 100g/ml)</small></h3>
        <div class="nutrition-grid">
           ${Object.entries(currentProduct.nutrients).map(([key, value]) => `
              <div class="nutrition-item">
                <strong>${value}</strong>
                <span>${key}</span>
              </div>
           `).join('')}
        </div>
        <p style="font-size: 0.75rem; color: rgba(255,255,255,0.3); margin-top: 30px;">* Nutritional values are approximate and may vary slightly per batch due to natural farm processes.</p>
      </div>
    `;
  } else if (tab === 'reviews') {
    content.innerHTML = `
      <div class="reviews-list">
        ${currentProduct.reviews.map(r => `
          <div class="review-card">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span class="reviewer-name">${r.name}</span>
              <span class="review-date">${r.date}</span>
            </div>
            <div style="color: var(--accent-gold); margin-bottom: 12px; font-size: 0.8rem;">★★★★★</div>
            <p style="font-size: 0.9rem; font-style: italic;">"${r.comment}"</p>
          </div>
        `).join('')}
        <p style="margin-top: 30px; font-size: 0.85rem; color: var(--accent-gold); cursor: pointer;">+ Load More Customer Stories</p>
      </div>
    `;
  } else if (tab === 'faq') {
     content.innerHTML = `
      <div style="max-width: 650px;">
        ${currentProduct.faq.map(f => `
          <div style="margin-bottom: 25px;">
            <p style="font-weight: 700; color: #fff; margin-bottom: 8px;">• ${f.q}</p>
            <p style="font-size: 0.9rem; padding-left: 15px;">${f.a}</p>
          </div>
        `).join('')}
        <p style="margin-top: 20px; font-size: 0.85rem;">Still have a question? <a href="contact.html" style="color: var(--accent-gold); text-decoration: none;">Message Our Farm Team</a></p>
      </div>
    `;
  }
};

function renderRelated(category, currentId) {
  const relatedGrid = document.getElementById('related-grid');
  if (!relatedGrid) return;

  const related = allProducts
    .filter(p => p.category === category && p.id !== currentId)
    .slice(0, 3);

  if (related.length === 0) {
    document.querySelector('.related-products').style.display = 'none';
    return;
  }

  relatedGrid.innerHTML = related.map(product => `
    <article class="bento-item" onclick="window.location.href='product.html?id=${product.id}'">
      <img src="${product.image}" alt="${product.name}" class="item-img" loading="lazy">
      <div class="item-overlay">
        <h3 class="item-name">${product.name}</h3>
        <p class="item-price">₹${product.price} ${product.priceLabel}</p>
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', loadProductDetail);
