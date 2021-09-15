var person = {
    name: 'Purushotham',
    age: 35,
    hobbies: ['Music', 'Movies']
};
console.log(person);
console.log("TYPE" + typeof person);
/*
person.name = 56; // X -> Because TS compiler inferred the type automatically
person.hobbies = 'Sports';
*/
person.name = "Ram";
person.hobbies.push("Sports");
console.log(person);
// Creating an array of objects
/*
let employee: ({
    name: string,
    age: number,
    hobbies: string[]
})[] = [];

*/
var employees = [];
employees.push({ name: 'Raj', age: 35, hobbies: ['Cooking'] });
employees.push({ name: 'Purushotham', age: 35, hobbies: ['Sports'] });
employees.push({ name: 'Anil', age: 36, hobbies: ['Movies'] });
console.log(employees);
