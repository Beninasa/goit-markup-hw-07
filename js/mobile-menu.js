(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    document.body.classList.toggle('no-scroll')
  }

})();


// (() => {
//   const openMenuBtn = document.querySelector("[data-menu-open]");
//   const closeMenuBtn = document.querySelector("[data-menu-close]");
//   const mobileMenu = document.querySelector("[data-menu]");
  
//   const toggleMenu = () => {
//     const isMenuHidden =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuHidden);
//     mobileMenu.classList.toggle('is-hidden');

//     const scrollLockMethod = !isMenuHidden
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//    };

//   openMenuBtn.addEventListener("click", toggleMenu);
//   closeMenuBtn.addEventListener("click", toggleMenu);

//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-hidden');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();