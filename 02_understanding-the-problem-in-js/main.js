var opa = document.getElementById("num1");
var opb = document.getElementById("num2");
var btn = document.getElementById("add");
function add(n1, n2) {
    return n1 + n2;
}
;
btn.addEventListener('click', function () {
    console.log(add(+opa.value, +opb.value));
});
