function combine(input1, input2, conversionResult) {
    var res;
    if (typeof input1 === 'number' && typeof input2 === "number") {
        res = +input1 + +input2;
    }
    else {
        // return input1 + input2; // X -> cannot be union types for +
        res = input1.toString() + input2.toString();
    }
    return (conversionResult == 'as-text') ? res.toString() : +res;
}
var combineNumbers = combine(20, 30, 'as-text');
console.log(combineNumbers + 100);
var combineNumbers2 = combine('20', '30', 'as-number');
console.log(combineNumbers2 + 100);
//Literal types
//let r: 25;
//r = 10;
var person = { name: 'Purushotham', age: 15 };
console.log(person);
function recommendMovie(user) {
    if (user.age > 18) {
        console.log(user.name + ' can watch Revenant');
    }
    else {
        console.log(user.name + ' can watch Avengers');
    }
}
recommendMovie(person);
