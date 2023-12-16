const welcome = document.getElementById('welcome')

const changelog = document.getElementById('changelog')
const changelogMain = document.getElementById('changelogMain')
const btnChangelog = document.getElementById('btnChangelog')

const win = document.getElementById('win')
const winMain = document.getElementById('winMain')
const btnWin = document.getElementById('btnWin')

const android = document.getElementById('android')
const androidMain = document.getElementById('androidMain')
const btnAndroid = document.getElementById('btnAndroid')

const linux = document.getElementById('linux')
const linuxMain = document.getElementById('linuxMain')
const btnLinux = document.getElementById('btnLinux')

const magisk = document.getElementById('magisk')
const magiskMain = document.getElementById('magiskMain')
const btnMagisk = document.getElementById('btnMagisk')

const themes = document.getElementById('themes')
const themesMain = document.getElementById('themesMain')
const btnThemes = document.getElementById('btnThemes')

const keys = document.getElementById('keys')
const keysMain = document.getElementById('keysMain')
const btnKeys = document.getElementById('btnKeys')

const frinends = document.getElementById('friends')
const frinendsMain = document.getElementById('friendsMain')
const btnFriends = document.getElementById('btnFriends')

const about = document.getElementById('about')
const aboutMain = document.getElementById('aboutMain')
const btnAbout = document.getElementById('btnAbout')


btnChangelog.addEventListener('click', function() {
    welcome.style.display = "none";
    changelog.style.display = "block";
    win.style.display = "none";
    android.style.display = "none";
    linux.style.display = "none";
    magisk.style.display = "none";
    themes.style.display = "none";
    keys.style.display = "none";
    frinends.style.display = "none";
    about.style.display = "none";

    changelogMain.style.display = "block";
    winMain.style.display = "none";
    androidMain.style.display = "none";
    linuxMain.style.display = "none";
    magiskMain.style.display = "none";
    themesMain.style.display = "none";
    keysMain.style.display = "none";
    frinendsMain.style.display = "none";
    aboutMain.style.display = "none";

    document.title = "Список изменений - OST"
})

btnWin.addEventListener('click', function() {
    welcome.style.display = "none";
    changelog.style.display = "none";
    win.style.display = "block";
    android.style.display = "none";
    linux.style.display = "none";
    magisk.style.display = "none";
    themes.style.display = "none";
    keys.style.display = "none";
    frinends.style.display = "none";
    about.style.display = "none";

    changelogMain.style.display = "none";
    winMain.style.display = "block";
    androidMain.style.display = "none";
    linuxMain.style.display = "none";
    magiskMain.style.display = "none";
    themesMain.style.display = "none";
    keysMain.style.display = "none";
    frinendsMain.style.display = "none";
    aboutMain.style.display = "none";

    document.title = "Программы для Windows - OST"
})

btnAndroid.addEventListener('click', function() {
    welcome.style.display = "none";
    changelog.style.display = "none";
    win.style.display = "none";
    android.style.display = "block";
    linux.style.display = "none";
    magisk.style.display = "none";
    themes.style.display = "none";
    keys.style.display = "none";
    frinends.style.display = "none";
    about.style.display = "none";

    changelogMain.style.display = "none";
    winMain.style.display = "none";
    androidMain.style.display = "block";
    linuxMain.style.display = "none";
    magiskMain.style.display = "none";
    themesMain.style.display = "none";
    keysMain.style.display = "none";
    frinendsMain.style.display = "none";
    aboutMain.style.display = "none";

    document.title = "Программы для Android - OST"
})

btnLinux.addEventListener('click', function() {
    welcome.style.display = "none";
    changelog.style.display = "none";
    android.style.display = "none";
    win.style.display = "none";
    linux.style.display = "block";
    magisk.style.display = "none";
    themes.style.display = "none";
    keys.style.display = "none";
    frinends.style.display = "none";
    about.style.display = "none";

    changelogMain.style.display = "none";
    winMain.style.display = "none";
    androidMain.style.display = "none";
    linuxMain.style.display = "block";
    magiskMain.style.display = "none";
    themesMain.style.display = "none";
    keysMain.style.display = "none";
    frinendsMain.style.display = "none";
    aboutMain.style.display = "none";

    document.title = "Программы для Linux - OST"
})

btnMagisk.addEventListener('click', function() {
    welcome.style.display = "none";
    changelog.style.display = "none";
    android.style.display = "none";
    win.style.display = "none";
    linux.style.display = "none";
    magisk.style.display = "block";
    themes.style.display = "none";
    keys.style.display = "none";
    frinends.style.display = "none";
    about.style.display = "none";

    changelogMain.style.display = "none";
    winMain.style.display = "none";
    androidMain.style.display = "none";
    linuxMain.style.display = "none";
    magiskMain.style.display = "block";
    themesMain.style.display = "none";
    keysMain.style.display = "none";
    frinendsMain.style.display = "none";
    aboutMain.style.display = "none";

    document.title = "Модули для Magisk - OST"
})

btnThemes.addEventListener('click', function() {
    welcome.style.display = "none";
    changelog.style.display = "none";
    android.style.display = "none";
    win.style.display = "none";
    linux.style.display = "none";
    magisk.style.display = "none";
    themes.style.display = "block";
    keys.style.display = "none";
    frinends.style.display = "none";
    about.style.display = "none";

    changelogMain.style.display = "none";
    winMain.style.display = "none";
    androidMain.style.display = "none";
    linuxMain.style.display = "none";
    magiskMain.style.display = "none";
    themesMain.style.display = "block";
    keysMain.style.display = "none";
    frinendsMain.style.display = "none";
    aboutMain.style.display = "none";

    document.title = "Кастомизация - OST"
})

btnKeys.addEventListener('click', function() {
    welcome.style.display = "none";
    changelog.style.display = "none";
    android.style.display = "none";
    win.style.display = "none";
    linux.style.display = "none";
    magisk.style.display = "none";
    themes.style.display = "none";
    keys.style.display = "block";
    frinends.style.display = "none";
    about.style.display = "none";

    changelogMain.style.display = "none";
    winMain.style.display = "none";
    androidMain.style.display = "none";
    linuxMain.style.display = "none";
    magiskMain.style.display = "none";
    themesMain.style.display = "none";
    keysMain.style.display = "block";
    frinendsMain.style.display = "none";
    aboutMain.style.display = "none";

    document.title = "Ключи активации - OST"
})

btnFriends.addEventListener('click', function() {
    welcome.style.display = "none";
    changelog.style.display = "none";
    android.style.display = "none";
    win.style.display = "none";
    linux.style.display = "none";
    magisk.style.display = "none";
    themes.style.display = "none";
    keys.style.display = "none";
    frinends.style.display = "block";
    about.style.display = "none";

    changelogMain.style.display = "none";
    winMain.style.display = "none";
    androidMain.style.display = "none";
    linuxMain.style.display = "none";
    magiskMain.style.display = "none";
    themesMain.style.display = "none";
    keysMain.style.display = "none";
    frinendsMain.style.display = "block";
    aboutMain.style.display = "none";

    document.title = "Друзья - OST"
})

btnAbout.addEventListener('click', function() {
    welcome.style.display = "none";
    changelog.style.display = "none";
    android.style.display = "none";
    win.style.display = "none";
    linux.style.display = "none";
    magisk.style.display = "none";
    themes.style.display = "none";
    keys.style.display = "none";
    frinends.style.display = "none";
    about.style.display = "block";

    changelogMain.style.display = "none";
    winMain.style.display = "none";
    androidMain.style.display = "none";
    linuxMain.style.display = "none";
    magiskMain.style.display = "none";
    themesMain.style.display = "none";
    keysMain.style.display = "none";
    frinendsMain.style.display = "none";
    aboutMain.style.display = "block";

    document.title = "Информация - OST"
})