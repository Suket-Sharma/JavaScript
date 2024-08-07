// script.js
const hamburgerButton = document.getElementById('hamburger-button');
const sidebar = document.getElementById('sidebar');

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('active');
    sidebar.classList.toggle('sidebar-toggle');
});