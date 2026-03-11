// ===========================
// === Mostrar / ocultar contraseña ===
document.querySelectorAll('.toggle-password').forEach(icon => {
  icon.addEventListener('click', () => {
    const input = icon.previousElementSibling;
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    icon.classList.toggle('bi-eye');
    icon.classList.toggle('bi-eye-slash');
  });
});

// ===========================
// === Evitar el "salto" entre modales sin dejar fondo gris ===
const modals = document.querySelectorAll('.modal');

modals.forEach(modal => {
  modal.addEventListener('hidden.bs.modal', () => {
    const anyOpen = document.querySelectorAll('.modal.show').length > 0;
    const backdrops = document.querySelectorAll('.modal-backdrop');

    if (anyOpen) {
      document.body.classList.add('modal-open');
    } else {
      backdrops.forEach(bd => bd.remove());
      document.body.classList.remove('modal-open');
    }
  });
});

// ===========================
// === Sistema para cambiar entre modales sin errores ===
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-switch]").forEach(function (el) {
    el.addEventListener("click", function (ev) {
      ev.preventDefault();

      const targetSelector = el.getAttribute("data-switch");
      if (!targetSelector) return;

      const targetEl = document.querySelector(targetSelector);
      if (!targetEl) return;

      const currentModalEl = el.closest(".modal");
      if (!currentModalEl) {
        new bootstrap.Modal(targetEl).show();
        return;
      }

      let currentInstance = bootstrap.Modal.getInstance(currentModalEl);
      if (!currentInstance) currentInstance = new bootstrap.Modal(currentModalEl);

      const onHidden = function () {
        new bootstrap.Modal(targetEl).show();
        currentModalEl.removeEventListener("hidden.bs.modal", onHidden);
      };

      currentModalEl.addEventListener("hidden.bs.modal", onHidden);
      currentInstance.hide();
    });
  });
});

// ===========================
// === Soporte especial para "Recuperar contraseña" ===
document.addEventListener("click", function (ev) {
  const trigger = ev.target.closest("[data-switch='#recoverModal']");
  if (!trigger) return;

  ev.preventDefault();

  const currentModal = trigger.closest(".modal");
  const target = document.querySelector("#recoverModal");

  if (currentModal && target) {
    const currentInstance = bootstrap.Modal.getInstance(currentModal);
    const onHidden = function () {
      new bootstrap.Modal(target).show();
      currentModal.removeEventListener("hidden.bs.modal", onHidden);
    };
    currentModal.addEventListener("hidden.bs.modal", onHidden);
    currentInstance.hide();
  }
});


// ===========================
// === Scroll de tarjetas con avance dinámico y circular ===
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll('.carousel-wrapper');

  carousels.forEach(wrapper => {
    const container = wrapper.querySelector('.cards-container');
    const gap = 16;

    function scrollCards(direction) {
      const cards = container.querySelectorAll('.card');
      if (!cards.length) return;

      const cardWidth = cards[0].offsetWidth + gap;
      const cardsToScroll = window.innerWidth < 600 ? 1 : 3;
      let newScroll = container.scrollLeft + direction * cardWidth * cardsToScroll;

      const maxScroll = container.scrollWidth - container.clientWidth;
      if (newScroll > maxScroll) newScroll = 0;
      if (newScroll < 0) newScroll = maxScroll;

      container.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }

    wrapper.querySelector('.carousel-btn.left')
      .addEventListener('click', () => scrollCards(-1));
    wrapper.querySelector('.carousel-btn.right')
      .addEventListener('click', () => scrollCards(1));
  });
});

