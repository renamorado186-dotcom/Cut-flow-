/* =========================================================
   CUTFLOW — Script
   Dos pequeñas tareas:
   1. Añadir la clase "scrolled" a la barra de navegación al desplazarse hacia abajo
   2. Revelar los elementos ".reveal" con una transición de desvanecimiento/desplazamiento al entrar en vista
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. Fondo del nav al hacer scroll ---------- */
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

  /* ---------- 2. Revelado al hacer scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  // Si el navegador no soporta IntersectionObserver, sólo mostrar todo.
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // animar una vez y luego no volver a observar
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(function (el) { observer.observe(el); });

});
