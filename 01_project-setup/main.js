var Role;
(function (Role) {
    Role[Role["AUTHOR"] = 0] = "AUTHOR";
    Role[Role["READONLY"] = 1] = "READONLY";
})(Role || (Role = {}));
;
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var role = [];
role.push(Role.AUTHOR);
console.log(role);
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
