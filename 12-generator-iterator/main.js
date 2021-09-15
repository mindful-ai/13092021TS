// ------------------------ Generators
function* numbers() {
    var i;
    for (i = 1; i <= 5; i++) {
        yield Math.pow(i, 2);
    }
}
let n = numbers();
console.log("1", n.next().value);
console.log("2", n.next().value);
console.log("3", n.next().value);
//console.log("4", n.next().value);
function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let fibonacciGenerator = createFibonacciGenerator(); // IterableIterator<number>
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
// ------------------------------- Iterators
let symbols = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    }
};
for (let s of symbols) {
    console.log(s);
}
let allSymbols = [...symbols];
console.log(allSymbols);
let [one, two, three, ...others] = symbols;
console.log(one);
console.log(two);
console.log(three);
console.log(others);
