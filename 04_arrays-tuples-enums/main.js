var favActivities = [];
favActivities.push("apples");
favActivities.push(5);
console.log(favActivities);
// Arrays which consists of only strings
var favActivities1;
//favActivities1 = ["apples", 5]; //XXX
favActivities1 = ["apples", "mangoes"];
console.log(favActivities1);
// Tuples
var data;
// data = ["apples", 56, true, 56]; //XXX
data = [45, "apples", 55, true];
console.log(data);
// Enumerations
//const AUTHOR = 0, READONLY = 1, ADMIN = 2;
var Roles;
(function (Roles) {
    Roles[Roles["AUTHOR"] = 1] = "AUTHOR";
    Roles[Roles["READONLY"] = 2] = "READONLY";
    Roles[Roles["ADMIN"] = 3] = "ADMIN";
})(Roles || (Roles = {}));
;
var role = Roles.AUTHOR;
if (role == Roles.AUTHOR) {
    console.log('THe role of Author');
}
else {
    console.log('Other role');
}
// Variation of the above said types
// [['Raj', 34, AUTHOR], ['Ram', 45, READONLY], ['Ravi', 65, ADMIN]]
// enum Roles {AUTHOR=1, READONLY=2, ADMIN=3}; // We already have this
var t;
t = ['Ram', 45, Roles.ADMIN];
var t1 = ['Raj', 45, Roles.AUTHOR];
var t2 = [45, Roles.AUTHOR, 'Raj'];
var t3 = ['Ravi', 65, Roles.ADMIN];
var arr = [];
// arr = [t, t1, t2, t3]; //XXX
arr.push(t);
//arr.push(t1); //XXX
arr.push(t3);
console.log(arr);
