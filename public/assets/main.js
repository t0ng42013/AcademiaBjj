function init() {
  // Obtener el elemento del nav
  const nav = document.querySelector(".main-nav");
  const btnmenu = document.getElementById("menu");
  const menu = document.getElementById("menu-list");
  const menuItem = document.querySelectorAll(".menu-item");

  menuItem.forEach((item) => {
    item.addEventListener("click", hidemenu);
  });
  btnmenu.addEventListener("click", toggleMenu);

  // Obtener la altura del header
  const headerHeight = document.querySelector("header").offsetHeight - 40;

  // Manejar el evento de desplazamiento
  window.addEventListener("scroll", function () {
    // Obtener la posición actual del desplazamiento vertical
    const scrollPosition = window.scrollY;

    // Verificar si el desplazamiento supera la altura del header
    if (scrollPosition > headerHeight) {
      // Agregar la clase "scrolled" al nav
      nav.classList.add("bg-fix");
    } else {
      // Eliminar la clase "scrolled" del nav
      nav.classList.remove("bg-fix");
    }
  });

  function toggleMenu() {
    menu.classList.toggle("hidden");
  }

  function hidemenu() {
    console.log("first");
    menu.classList.add("hidden");
  }
}

// Llamar a la función init cuando se cargue la página
window.addEventListener("load", init);
