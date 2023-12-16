const block = document.querySelector('main');
const closeBtn = document.querySelector('.st-bar-btn-main-close');
const hideBtn = document.querySelector('.st-bar-btn-main-hide');
const restoreBtn = document.querySelector('.restore-btn');
const taskbarBtn = document.querySelector('.taskbar-icn')
const navbar = document.querySelector("footer")
const model = document.querySelector(".fixed-ver")
const startMenu = document.getElementById("startmenu")

closeBtn.addEventListener('click', function() {
    block.style.opacity = '0';
    block.style.scale = '0.9';
    setTimeout(() => block.style.display = "none", 200)
    navbar.style.bottom = "0"
    model.style.top = "0"
    taskbarBtn.classList.remove("active")
    taskbarBtn.classList.remove("opened")
});

hideBtn.addEventListener('click', function() {
    block.style.opacity = '0';
    block.style.scale = '0.9';
    setTimeout(() => block.style.display = "none", 200)
    navbar.style.bottom = "0"
    model.style.top = "0"
    taskbarBtn.classList.remove("active")
    taskbarBtn.classList.add("opened")
});

restoreBtn.addEventListener('click', function() {
    block.style.opacity = '1';
    block.style.scale = '1';
    block.style.display = "flex"
    navbar.style.bottom = "-40px"
    model.style.top = "-40px"
    taskbarBtn.classList.add("active")
    startMenu.style.transform = "translateY(20px)";
    startMenu.style.opacity = 0;
    setTimeout(() => startMenu.style.display = "none", 200)
});

taskbarBtn.addEventListener('click', function() {
    block.style.opacity = '1';
    block.style.scale = '1';
    block.style.display = "flex"
    navbar.style.bottom = "-40px"
    model.style.top = "-40px"
    taskbarBtn.classList.add("active")
    startMenu.style.transform = "translateY(20px)";
    startMenu.style.opacity = 0;
    setTimeout(() => startMenu.style.display = "none", 200)
});