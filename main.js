// Navigation & Header Logic
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const nav = document.querySelector('nav');

  // Create overlay if it doesn't exist
  let overlay = document.querySelector('.nav-menu-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'nav-menu-overlay';
    document.body.appendChild(overlay);
  }


  const closeMenu = () => {
    toggle.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  const openMenu = () => {
    toggle.classList.add('active');
    menu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      if (menu.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when clicking a link or overlay
    overlay.addEventListener('click', closeMenu);
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
});

let cart = JSON.parse(localStorage.getItem('milk_shop_cart')) || [];

/**
 * Render products to bento grid
 */
function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = allProducts.map(product => `
    <article class="bento-item" onclick="window.location.href='product.html?id=${product.id}'">
      <img src="${product.image}" alt="${product.name}" class="item-img" loading="lazy">
      <div class="item-overlay">
        <h3 class="item-name">${product.name}</h3>
        <p class="item-price">₹${product.price} ${product.priceLabel}</p>
      </div>
    </article>
  `).join('');
}

/**
 * Cart Rendering Logic
 */
function renderCart() {
  const container = document.getElementById('cart-items-container');
  const emptyMsg = document.getElementById('empty-cart-msg');
  const totalDisplay = document.getElementById('cart-total-price');
  const cartCountIndicator = document.getElementById('cart-count');

  if (!container || !emptyMsg || !totalDisplay || !cartCountIndicator) return;

  if (cart.length === 0) {
    emptyMsg.style.display = 'block';
    container.innerHTML = '';
    totalDisplay.innerText = '₹0';
    cartCountIndicator.innerText = '0';
    return;
  }

  emptyMsg.style.display = 'none';
  cartCountIndicator.innerText = cart.length;

  let total = 0;
  container.innerHTML = cart.map((item, index) => {
    total += item.price;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
        </div>
        <button class="remove-item" onclick="removeFromCart(${index})">&times;</button>
      </div>
    `;
  }).join('');

  totalDisplay.innerText = `₹${total}`;
}

/**
 * Persist cart to localStorage
 */
function saveCart() {
  localStorage.setItem('milk_shop_cart', JSON.stringify(cart));
  renderCart();
}

/**
 * Remove from cart
 */
window.removeFromCart = function(index) {
  cart.splice(index, 1);
  saveCart();
}

/**
 * Modal Controls
 */
  const cartTrigger = document.getElementById('cart-trigger');
  const cartTriggerMobile = document.getElementById('cart-trigger-mobile');
  const cartSidebar = document.getElementById('cart-sidebar');
  const closeCart = document.getElementById('close-cart');
  const modalOverlay = document.getElementById('modal-overlay');

  const openCartFn = () => {
    modalOverlay.classList.add('active');
    // Mobile menu might be open, close it
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    if (toggle && menu) {
      toggle.classList.remove('active');
      menu.classList.remove('active');
    }
    document.body.style.overflow = 'hidden';
  };

  const closeCartFn = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  if (cartTrigger) cartTrigger.addEventListener('click', openCartFn);
  if (cartTriggerMobile) cartTriggerMobile.addEventListener('click', openCartFn);
  if (closeCart) closeCart.addEventListener('click', closeCartFn);

// Close on background click
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeCartFn();
});

/**
 * Add To Cart
 */
window.addToCart = function(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    saveCart();
    renderCart();

    // Smooth Feedback
    const cartBtn = document.getElementById('cart-trigger');
    if (cartBtn) {
      cartBtn.style.transform = 'scale(1.2) translateY(-5px)';
      setTimeout(() => cartBtn.style.transform = 'scale(1) translateY(0)', 300);
    }
  }
};

/**
 * Pincode Check
 */
window.checkDelivery = function() {
  const input = document.getElementById('pincode-input');
  const status = document.getElementById('pincode-status');
  if (!input || !status) return;

  const code = input.value.trim();
  if (code.length < 6) {
    status.innerText = "Please enter a valid 6-digit PIN code.";
    status.style.color = "#ff4d4d";
    return;
  }

  // Realistic delivery range checks for New Delhi
  if (code.startsWith('110')) {
    status.innerText = "✓ Yes! We deliver to your area before 7:00 AM.";
    status.style.color = "var(--accent-gold)";
  } else {
    status.innerText = "✗ Sorry, we don't deliver to that area yet.";
    status.style.color = "#ff4d4d";
  }
};

/**
 * Animated Stats Counter
 */
function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  const speed = 200;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const update = () => {
          const goal = +target.getAttribute('data-target');
          const count = +target.innerText || 0;
          const inc = goal / speed;

          if (count < goal) {
            target.innerText = Math.ceil(count + inc);
            setTimeout(update, 1);
          } else {
            target.innerText = goal;
          }
        };
        update();
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/**
 * Global Open Source Banner
 */
function injectBanner() {
  const banner = document.createElement('div');
  banner.className = 'opensource-banner';
  banner.id = 'top-announcement';
  banner.innerHTML = `
    This is a free open-source static HTML template. You are free to use, edit, and share this template from our <a href="https://github.com/Dezinet/dezinet-milk-shop-html-template" target="_blank">GitHub repository</a>. 
    If you need this design converted into a professional WordPress site with WooCommerce, or a modern Next.js application with a full backend, reach out to us at 
    <a href="https://dezinet.com/contact" target="_blank">Dezinet</a>.
    <button class="close-banner" onclick="closeTopBanner()">&times;</button>
  `;
  document.body.prepend(banner);
}

window.closeTopBanner = function() {
  const banner = document.getElementById('top-announcement');
  if (banner) {
    banner.style.display = 'none';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  injectBanner();
  renderProducts();
  renderCart();
  initCounters();
});
