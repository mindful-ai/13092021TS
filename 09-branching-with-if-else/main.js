var a = document.getElementById("n1");
var b = document.getElementById("n2");
var btn = document.getElementById("btn");
btn.onclick = function () {
    var res = +a.value - +b.value;
    if (res > 0) {
        console.log("The result is positive");
    }
    else if (res < 0) {
        console.log("The result is negative");
    }
    else {
        console.log("The result is zero");
    }
};
