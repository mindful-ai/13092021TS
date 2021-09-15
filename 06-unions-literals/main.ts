
// user types, also called as custom types
type combinable = number | string; // union
type resultType = 'as-text' | 'as-number';  //literal and also union
type user = {name: string, age: number};

function combine(input1: combinable, input2: number | string, 
    conversionResult: resultType ){
    var res: any;
    if(typeof input1 === 'number' && typeof input2 === "number"){
        res = +input1 + +input2;
    } else {
        // return input1 + input2; // X -> cannot be union types for +
        res = input1.toString() + input2.toString();
    }
    return (conversionResult == 'as-text')? res.toString(): +res;
}

const combineNumbers = combine(20, 30, 'as-text');
console.log(combineNumbers + 100);

const combineNumbers2 = combine('20', '30', 'as-number');
console.log(combineNumbers2 + 100);

//Literal types
//let r: 25;
//r = 10;

let person: user = {name:'Purushotham', age: 15};

console.log(person);

function recommendMovie(user: user){
    if(user.age > 18){
        console.log(user.name + ' can watch Revenant');
    } else {
        console.log(user.name + ' can watch Avengers');
    }
}

recommendMovie(person);