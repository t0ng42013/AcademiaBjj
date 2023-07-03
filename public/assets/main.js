// Obtener el elemento del nav
const nav = document.querySelector(".main-nav");

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
