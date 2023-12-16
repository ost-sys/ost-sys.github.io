document.addEventListener('DOMContentLoaded', () => {
    const startMenu = document.getElementById("startmenu")
    const startMenuIcon = document.querySelector(".start-menu")
    const screenBtn = document.getElementById("screen")
    const restoreBtn = document.querySelector('.restore-btn');
    
    let isVisible = false;

    startMenuIcon.addEventListener('click', function() {
        isVisible = !isVisible;

        if (isVisible) {
            startMenu.style.transform = "translateY(0)";
            startMenu.style.opacity = 1;
            startMenu.style.display = "flex";
        } else {
            startMenu.style.transform = "translateY(20px)";
            startMenu.style.opacity = 0;
            setTimeout(() => startMenu.style.display = "none", 200)
        }
    })
    
    screenBtn.addEventListener('click', function() {
        startMenu.style.transform = "translateY(20px)";
        startMenu.style.opacity = 0;
        setTimeout(() => startMenu.style.display = "none", 200)
        isVisible = !isVisible
    })

    restoreBtn.addEventListener('click', function() {
        startMenu.style.transform = "translateY(20px)";
        startMenu.style.opacity = 0;
        setTimeout(() => startMenu.style.display = "none", 200)
        isVisible = !isVisible
    })
})
