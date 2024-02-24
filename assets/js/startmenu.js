document.addEventListener('DOMContentLoaded', () => {
    const startMenu = document.getElementById("startmenu")
    const startMenuIcon = document.querySelector(".start-menu")
    const screenBtn = document.getElementById("screen")
    const restoreBtn = document.querySelector('.restore-btn');
    const notiBtn = document.querySelector('.notification-button');
    const notiCenter = document.querySelector(".notification-center");
    
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

    // notiBtn.addEventListener('click', function() {
    //     isVisible = !isVisible;

    //     if (isVisible) {
    //         notiCenter.style.right = 0;
    //         notiCenter.style.opacity = 1;
    //         notiBtn.classList.add("active");
    //     } else {
    //         notiCenter.style.right = "-600px";
    //         notiCenter.style.opacity = 0;
    //         notiBtn.classList.remove("active");
    //     }
    // })
    
    screenBtn.addEventListener('click', function() {
        startMenu.style.transform = "translateY(20px)";
        startMenu.style.opacity = 0;
        notiCenter.style.opacity = 0;
        notiCenter.style.right = "-600px";
        notiBtn.classList.remove("active");
        setTimeout(() => startMenu.style.display = "none", 200)
        isVisible = !isVisible
    })

    restoreBtn.addEventListener('click', function() {
        startMenu.style.transform = "translateY(20px)";
        startMenu.style.opacity = 0;
        notiCenter.style.opacity = 0;
        notiCenter.style.right = "-600px";
        notiBtn.classList.remove("active");
        setTimeout(() => startMenu.style.display = "none", 200)
        isVisible = !isVisible
    })
})
