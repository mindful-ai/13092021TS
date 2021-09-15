// Typing the return values from the functions

function add(n1: string, n2: number): string{
    return n1 + n2;
}

function add2(n1: string, n2: number): void{
    console.log(n1+n2);
}

function add3(n1: number, n2: number): any{
    console.log(n1+n2);
    return;
}

function add4(n1: number, n2: number): number{
    console.log(n1+n2);
    return 45;
}

function add5(n1: string, n2: string): string{
    console.log(n1+n2);
    return '45';
}
// Call backs
function combine(n1: number, n2: number, callBack: (n1: number, n2: number) => number): void{
    console.log('Call Back Demo: ', n1 + n2);
    callBack(n1, n2);
}


console.log("F1 :" + add('10', 20));
add2('10', 20);
add3(10, 20);

// Using functions as type

let myVariable: number = 10;
myVariable = 100;
// combineValues = '100'; // This cannot work
console.log(myVariable);

let combineValues: (a: number, b: number) => number;
//combineValues = add2;
combineValues = add3; // any and undefine can work;
combineValues = add4;

console.log("Combine Values: " + combineValues(10, 10));

//combine(10, 20, add);
//combine(10, 20, add2);
combine(10, 20, add3);
combine(10, 20, add4);
//combine(10, 20, add5);