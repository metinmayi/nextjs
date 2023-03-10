export function toggleNavbarContentVisibility() {
  const navbarContent = document.querySelector("#navbarContent");

  navbarContent.classList.toggle("pointer-events-none");
  navbarContent.classList.toggle("opacity-0");
  navbarContent.classList.toggle("-translate-y-full");
}
