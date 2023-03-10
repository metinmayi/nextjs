export function toggleNavbarContentVisibility() {
  const navbarContent = document.querySelector("#navbarContent");

  navbarContent.classList.toggle("pointer-events-none");
  navbarContent.classList.toggle("opacity-0");
  navbarContent.classList.toggle("-translate-y-full");
  handleHamburgerLines();
}

function handleHamburgerLines() {
  const [top, middle, bottom] = document.querySelectorAll(".hamburgerLine");

  top.parentNode.classList.toggle("gap-1");
  top.parentNode.classList.toggle("gap-0");

  top.classList.toggle("rotate-0");
  top.classList.toggle("rotate-45");
  top.classList.toggle("translate-y-0");
  top.classList.toggle("translate-y-1/2");

  middle.classList.toggle("rotate-0");
  middle.classList.toggle("-rotate-45");
  middle.classList.toggle("translate-y-0");
  middle.classList.toggle("-translate-y-1/2");

  bottom.classList.toggle("opacity-1");
  bottom.classList.toggle("opacity-0");
  bottom.classList.toggle("h-1");
  bottom.classList.toggle("rotate-0");
  bottom.classList.toggle("-rotate-45");
  bottom.classList.toggle("translate-y-0");
  bottom.classList.toggle("-translate-y-1");
}
