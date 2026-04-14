document.addEventListener('DOMContentLoaded', () => {
    const startMenu = document.getElementById("startmenu");
    const startMenuIcon = document.querySelector(".start-menu");

    const notificationCenter = document.querySelector(".notification-center");
    const notificationCenterIconContainer = document.querySelector(".notification-icn");
    const notificationCenterIcon = document.querySelector(".noti-icn");

    startMenu.style.display = '';
    startMenu.style.opacity = '';
    startMenu.style.transform = '';

    notificationCenter.style.display = '';
    notificationCenter.style.opacity = '';
    notificationCenter.style.transform = '';

    startMenuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        startMenu.classList.toggle('opened');
        startMenuIcon.classList.toggle('ready');
    });

    notificationCenterIconContainer.addEventListener('click', (e) => {
        e.stopPropagation();
        notificationCenter.classList.toggle('opened');
        notificationCenterIconContainer.classList.toggle('ready');
        notificationCenterIcon.innerText = notificationCenter.classList.contains('opened') ? '' : '';
    });

    document.addEventListener('click', (e) => {
        if (!startMenu.contains(e.target) && startMenu.classList.contains('opened')) {
            startMenu.classList.remove('opened');
            startMenuIcon.classList.remove('ready');
        }
    });

    document.addEventListener('click', (e) => {
        if (!notificationCenter.contains(e.target) && notificationCenter.classList.contains('opened')) {
            notificationCenter.classList.remove('opened');
            notificationCenterIconContainer.classList.remove('ready');
            notificationCenterIcon.innerText = '';
        }
    });
});