// JavaScript code to toggle menu based on screen width
const menuIcon = document.querySelector('.menu-icon');
const menuContent = document.querySelector('.menu-content');

function toggleMenu() {
    if (menuContent.style.display === 'none' || !menuContent.style.display) {
        menuContent.style.display = 'block';
    } else {
        menuContent.style.display = 'none';
    }
}

menuIcon.addEventListener('click', toggleMenu);

// Update menu display on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth >= 701) {
        menuContent.style.display = 'block';
    } else {
        menuContent.style.display = 'none';
    }
});
