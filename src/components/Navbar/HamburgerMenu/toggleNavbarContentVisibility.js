export function toggleNavbarContentVisibility(){
    const navbarContent = document.querySelector('#navbarContent');

    navbarContent.classList.toggle('opacity-0');
    navbarContent.classList.toggle('-translate-y-full');
}