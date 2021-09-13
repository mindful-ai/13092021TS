let favActivities = [];
favActivities.push("apples");
favActivities.push(5);
console.log(favActivities);

// Arrays which consists of only strings
let favActivities1:  string[];
//favActivities1 = ["apples", 5]; //XXX
favActivities1 = ["apples", "mangoes"];
console.log(favActivities1);

// Tuples
let data: [number, string, number, boolean];
// data = ["apples", 56, true, 56]; //XXX
data = [45, "apples", 55, true];
console.log(data);

// Enumerations
//const AUTHOR = 0, READONLY = 1, ADMIN = 2;
enum Roles {AUTHOR=1, READONLY=2, ADMIN=3};
var role = Roles.AUTHOR;
if(role == Roles.AUTHOR){
    console.log('THe role of Author');
} else {
    console.log('Other role')
}

// Variation of the above said types
// [['Raj', 34, AUTHOR], ['Ram', 45, READONLY], ['Ravi', 65, ADMIN]]

// enum Roles {AUTHOR=1, READONLY=2, ADMIN=3}; // We already have this

let t: [string, number, Roles];
t = ['Ram', 45, Roles.ADMIN];
let t1 = ['Raj', 45, Roles.AUTHOR]; 
let t2 = [45, Roles.AUTHOR, 'Raj'];
let t3: [string, number, Roles] = ['Ravi', 65, Roles.ADMIN];


let arr: ([string, number, Roles])[] = [];
// arr = [t, t1, t2, t3]; //XXX

arr.push(t);
//arr.push(t1); //XXX
arr.push(t3);
console.log(arr);

