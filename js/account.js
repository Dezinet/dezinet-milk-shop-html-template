/**
 * Dashboard Tab Switching
 */
function switchTab(tabId) {
  const tabs = ['orders', 'subscriptions', 'profile', 'address'];
  
  // Update Tabs
  const allTabs = document.querySelectorAll('.account-tabs li');
  allTabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.innerText.toLowerCase().includes(tabId)) {
      tab.classList.add('active');
    }
  });

  // Update View
  tabs.forEach(t => {
    const view = document.getElementById(`${t}-tab`);
    if (view) {
      if (t === tabId) {
        view.style.display = 'block';
        view.classList.add('active');
      } else {
        view.style.display = 'none';
        view.classList.remove('active');
      }
    }
  });

  // Scroll to top of section on mobile
  if (window.innerWidth < 991) {
    window.scrollTo({ top: 100, behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Ensure correct initial state
  switchTab('orders');
});
