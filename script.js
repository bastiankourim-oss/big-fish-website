/* Big Fish — script.js */

(function () {
  'use strict';

  // === Mobile nav ===
  const burger = document.querySelector('.nav__burger');
  const mobile = document.querySelector('.nav__mobile');

  if (burger && mobile) {
    burger.addEventListener('click', function () {
      const open = mobile.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close on link click
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobile.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobile.classList.contains('open')) {
        mobile.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      }
    });
  }

  // === Active nav link ===
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // === Contact form ===
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.form__submit .btn');
      var note = form.querySelector('.form__note');
      btn.textContent = 'Message sent ✓';
      btn.disabled = true;
      if (note) note.textContent = 'We\'ll be in touch within 24 hours.';
    });
  }

  // === Subtle scroll shadow on nav ===
  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.style.boxShadow = window.scrollY > 8
        ? '0 1px 0 rgba(10,31,58,.08), 0 4px 24px rgba(10,31,58,.04)'
        : '';
    }, { passive: true });
  }

})();
