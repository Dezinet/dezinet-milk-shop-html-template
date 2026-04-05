let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'newest';

function renderShop() {
  const grid = document.getElementById('shop-grid');
  if (!grid) return;

  let filtered = allProducts.filter(p => {
    const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting
  if (currentSort === 'price-low') filtered.sort((a, b) => a.price - b.price);
  if (currentSort === 'price-high') filtered.sort((a, b) => b.price - a.price);

  grid.innerHTML = filtered.map(product => `
    <article class="shop-item" onclick="if(!event.target.closest('button')) window.location.href='product.html?id=${product.id}'" style="cursor: pointer;">
      <span class="weight-tag">Min. Order: ${product.weightMin}</span>
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="shop-price">₹${product.price} <small>${product.priceLabel}</small></p>
      <button class="btn-luxe" style="width: 100%;" onclick="addToCart(${product.id})">Add to Order</button>
    </article>
  `).join('');

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="empty-msg" style="grid-column: 1/-1;">No products found matching your search.</p>`;
  }
}

window.setCategory = function(cat) {
  currentCategory = cat;
  renderShop();
};

document.getElementById('shop-search')?.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderShop();
});

document.getElementById('shop-sort')?.addEventListener('change', (e) => {
  currentSort = e.target.value;
  renderShop();
});

document.addEventListener('DOMContentLoaded', () => {
  renderShop();
});
