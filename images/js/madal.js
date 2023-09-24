(() => {
  const refs = {
    // Modal order form
    openModalBtn: document.querySelector('[open-order-modal-form]'),
    closeModalBtn: document.querySelector('[close-order-modal-form]'),
    modalDiv: document.querySelector('[order-modal-form]'),

    // Modal mobile menu
    openMenuBtn: document.querySelector('[open-mobil-menu]'),
    closeMenuBtn: document.querySelector('[close-mobil-menu]'),
    menuDiv: document.querySelector('[mobil-form]'),
    menuLinks: document.querySelectorAll('.js-menu-link'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuLinks.forEach(element => element.addEventListener('click', closeMenu));

  function toggleModal() {
    refs.modalDiv.classList.toggle('is-open');
  }

  function toggleMenu() {
    refs.menuDiv.classList.toggle('is-open');
  }

  function closeMenu() {
    refs.menuDiv.classList.remove('is-open');
  }
})();
