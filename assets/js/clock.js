setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);

setInterval(function () {
    var now = new Date();
    var date = document.getElementById("date");
    date.innerHTML = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
}, 1000);

function getAge() {
    var birthDate = new Date("16/09/2007".split("/").reverse().join("-"));
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}
try {
    document.getElementById("age").innerHTML = getAge() + " лет";
} catch (TypeError) {
    console.log("Object with id 'age' not found");
}
