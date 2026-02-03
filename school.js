    document.addEventListener('DOMContentLoaded', function() {

  // HAMBURGER MENU
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close menu when link clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.style.display = 'none';
      });
    });
  }

  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // CONTACT FORM VALIDATION & SUBMISSION
  const contactForm = document.getElementById('contactForm');
  const contactMessage = document.getElementById('contactMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Clear previous errors
      document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
        field.classList.remove('error');
        const errorMsg = field.parentElement.querySelector('.error-msg');
        if (errorMsg) errorMsg.classList.remove('show');
      });

      // Validation
      let isValid = true;
      const fields = contactForm.querySelectorAll('[required]');

      fields.forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('error');
          const errorMsg = field.parentElement.querySelector('.error-msg');
          if (errorMsg) {
            errorMsg.textContent = 'This field is required';
            errorMsg.classList.add('show');
          }
          isValid = false;
        }
      });

      // Email validation
      const emailField = contactForm.querySelector('input[type="email"]');
      if (emailField && emailField.value && !emailField.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailField.classList.add('error');
        isValid = false;
      }

      // Phone validation
      const phoneField = contactForm.querySelector('input[type="tel"]');
      if (phoneField && phoneField.value && !phoneField.value.match(/^[0-9\s\+\-]{10,}$/)) {
        phoneField.classList.add('error');
        isValid = false;
      }

      if (!isValid) {
        contactMessage.textContent = '❌ Please fill all required fields correctly!';
        contactMessage.className = 'form-message show error';
        return;
      }

      // Collect data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      data.submittedAt = new Date().toISOString();

      // Save to localStorage
      const submissions = JSON.parse(localStorage.getItem('kiddy_club_submissions') || '[]');
      submissions.push(data);
      localStorage.setItem('kiddy_club_submissions', JSON.stringify(submissions));

      // Success message
      contactMessage.textContent = '🎉 Thank you! We received your message. We\'ll contact you soon! 😊';
      contactMessage.className = 'form-message show success';

      // Reset form
      contactForm.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        contactMessage.classList.remove('show');
      }, 5000);
    });
  }

  // CLASS ENROLL BUTTONS
  document.querySelectorAll('.class-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const className = this.closest('.class-card').querySelector('h3').textContent;
      alert(`🎉 Thank you for your interest in ${className}!\n\nPlease fill the contact form below to complete enrollment.`);
      document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // SCROLL ANIMATIONS
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.6s ease-in forwards';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.activity-card, .class-card, .why-card, .testimonial-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });

});

// FADE-IN ANIMATION
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);