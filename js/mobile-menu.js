// (() => {
//     const menuBtnRef = document.querySelector("[data-menu-button]");
//     // const mobileMenuRef = document.querySelector("[data-menu-container]");
//     // const body = document.getElementsByTagName("body")[0];
//     menuBtnRef.addEventListener("click", () => {
//         // body.classList.toggle("modal-open");
//         // const expanded =
//         //     menuBtnRef.getAttribute("aria-expanded") === "true" || "false";
    
//         menuBtnRef.classList.toggle("is-open");
//         // menuBtnRef.setAttribute("aria-expanded", !expanded);
//         // mobileMenuRef.classList.toggle("is-opened");
    
    
    
//      });
// })();
//
//
//
    (() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });
})();



// (() => {
//   const refs = {
//     menuBtn: document.querySelector("[data-menu-button]"),
//     mobileMenu: document.querySelector("[data-menu]"),
//     body: document.querySelector("body"),
//   };
//   refs.menuBtn.addEventListener("click", () => {
//     const expanded =
//       refs.menuBtn.getAttribute("aria-expanded") === "true" || false;
//     refs.menuBtn.setAttribute("aria-expanded", !expanded);
//     refs.menuBtn.classList.toggle("is-open");
//     refs.mobileMenu.classList.toggle("is-open");
//     refs.body.classList.toggle("is-open");
//   });
// })();