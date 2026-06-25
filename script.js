/* =========================================================
   CUTFLOW — Script
   Two small jobs:
   1. Add "scrolled" style to the nav bar after scrolling down
   2. Reveal ".reveal" elements with a fade/slide as they enter view
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. Nav background on scroll ---------- */
  var nav = document.getElementById('nav');

  function updateNav() {
    if (window.scrollY > 24) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  /* ---------- 2. Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  // If the browser doesn't support IntersectionObserver, just show everything.
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // animate once, then leave it alone
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(function (el) { observer.observe(el); });

});
