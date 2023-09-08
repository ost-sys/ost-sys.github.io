const block = document.querySelector('main');
const closeBtn = document.querySelector('.st-bar-btn-main-close');
const hideBtn = document.querySelector('.st-bar-btn-main-hide');
const restoreBtn = document.querySelector('.restore-btn');
const taskbarBtn = document.querySelector('.taskbar-icn')

closeBtn.addEventListener('click', function() {
    block.style.opacity = '0';
    block.style.scale = '0.9';
    block.style.display = "none"
    taskbarBtn.classList.remove("active")
    taskbarBtn.classList.remove("opened")
});

hideBtn.addEventListener('click', function() {
    block.style.opacity = '0';
    block.style.scale = '0.9';
    block.style.display = "none"
    taskbarBtn.classList.remove("active")
    taskbarBtn.classList.add("opened")
});

restoreBtn.addEventListener('click', function() {
    block.style.opacity = '1';
    block.style.scale = '1';
    block.style.display = "flex"
    taskbarBtn.classList.add("active")
});

taskbarBtn.addEventListener('click', function() {
    block.style.opacity = '1';
    block.style.scale = '1';
    block.style.display = "flex"
    taskbarBtn.classList.add("active")
});