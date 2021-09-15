var input = document.getElementById("in");
var btn = document.getElementById("calc");
btn.onclick = function () {
    var n = +input.value;
    var res = 1;
    var i = 1;
    /*
    for(i = 1; i <= n; i++){
        res *= i;
    }
    */
    while (i <= n) {
        res *= i;
        i++;
    }
    console.log("Factorial :", res);
};
