function copyLinkFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    alert("Скопировано!");
}
function copyCodeFunction1() {
    var copyText = document.getElementById("code1");
    copyText.select();
    document.execCommand("copy");
    alert("Скопировано!");
}
function copyCodeFunction2() {
    var copyText = document.getElementById("code2");
    copyText.select();
    document.execCommand("copy");
    alert("Скопировано!");
}