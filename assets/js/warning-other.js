const taskbarIcn = document.getElementById('icn')
const black = document.getElementById('black')
const warning = document.getElementById('warning')
const warningBtn = document.getElementById('warningBtn')

taskbarIcn.addEventListener('click', function() {
    black.style.display = "block";
    black.style.opacity = 1;
    black.style.backdropFilter = "blur(40px)"
    warning.style.display = "block";
    warning.style.opacity = 1
})

warningBtn.addEventListener('click', function() {
    black.style.opacity = 0
    setTimeout(() => black.style.display = "none", 200)
    warning.style.opacity = 0
    setTimeout(() => warning.style.display = "none", 200)
})