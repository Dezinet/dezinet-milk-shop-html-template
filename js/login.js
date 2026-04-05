/**
 * Unified Auth Management
 */

function switchView(view) {
  const views = ['signin', 'signup', 'forgot'];
  
  views.forEach(v => {
    const section = document.getElementById(`${v}-section`);
    if (section) {
      if (v === view) {
        section.classList.add('active');
        section.style.display = 'block';
      } else {
        section.classList.remove('active');
        section.style.display = 'none';
      }
    }
  });

  // Smooth scroll to card top on mobile
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  // Initial state logic
  const views = ['signup', 'forgot'];
  views.forEach(v => {
    const section = document.getElementById(`${v}-section`);
    if (section) section.style.display = 'none';
  });

  // Individual Form Listeners -> Bypass validation and go to Account
  const signinForm = document.getElementById('signin-form');
  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.location.href = 'account.html';
    });
  }

  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.location.href = 'account.html';
    });
  }

  const forgotForm = document.getElementById('forgot-form');
  if (forgotForm) {
    forgotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Reset link sent! (Static Demo)");
      switchView('signin');
    });
  }
});
