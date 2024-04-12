// JavaScript code to toggle menu
const menuIcon = document.querySelector('.hamburger');
const menuContent = document.querySelector('.menu');

function toggleMenu() {
menuIcon.classList.add("visible")
}

menuIcon.addEventListener('click', toggleMenu);
