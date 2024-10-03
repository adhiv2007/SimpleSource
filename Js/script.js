document.addEventListener('DOMContentLoaded', function() {
  // Password toggle functionality
  const passwordToggle = document.getElementById('passwordToggle');
  if (passwordToggle) {
    passwordToggle.addEventListener('click', function() {
      const passwordInput = document.getElementById('password'); // Changed from 'password1' to 'password'
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      this.querySelector('i').classList.toggle('fa-eye');
      this.querySelector('i').classList.toggle('fa-eye-slash');
    });
  }

  const passwordToggle1 = document.getElementById('passwordToggle');
  if (passwordToggle1) {
    passwordToggle.addEventListener('click', function() {
      const passwordInput = document.getElementById('password1'); // Match this with the HTML
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      this.querySelector('i').classList.toggle('fa-eye');
      this.querySelector('i').classList.toggle('fa-eye-slash');
    });
  }


  // Home page transition effect
  const fadeInSection = document.querySelector('.fade-in-section');
  const hImg = document.querySelector('.hImg');

  if (fadeInSection && hImg) {
    function checkScroll() {
      const triggerBottom = window.innerHeight / 5 * 4;
      const fadeInTop = fadeInSection.getBoundingClientRect().top;

      if (fadeInTop < triggerBottom) {
        fadeInSection.classList.add('is-visible');
        hImg.classList.add('scrolled');
      }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on load
  }
});