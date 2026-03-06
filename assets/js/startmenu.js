document.addEventListener('DOMContentLoaded', () => {
    const startMenu = document.getElementById("startmenu");
    const startMenuIcon = document.querySelector(".start-menu");

    startMenu.style.display = '';
    startMenu.style.opacity = '';
    startMenu.style.transform = '';

    startMenuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        startMenu.classList.toggle('opened');
    });

    document.addEventListener('click', (e) => {
        if (!startMenu.contains(e.target) && startMenu.classList.contains('opened')) {
            startMenu.classList.remove('opened');
        }
    });
});