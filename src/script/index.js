document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});