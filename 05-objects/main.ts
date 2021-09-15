let person: {
    name: string,
    age: number,
    hobbies: string[]
    job: {
        salary: number,
        company: string
        // any type examples
        //company: any,
        //company
    }
} = {
    name: 'Purushotham',
    age: 35,
    hobbies: ['Music', 'Movies'],
    job: {salary:1500000, company: ''}
}

console.log(person);
console.log("TYPE" + typeof person);

/*
person.name = 56; // X -> Because TS compiler inferred the type automatically
person.hobbies = 'Sports';
*/

person.name = "Ram";
person.hobbies.push("Sports");
person.job.company = "Oracle";
console.log(person);


// Creating an array of objects

/*
let employee: ({
    name: string,
    age: number,
    hobbies: string[]
})[] = [];

*/

let employees: (typeof person)[] = [];

employees.push({name:'Raj', age:35, hobbies:['Cooking'], job:{salary:1500000, company: 'INfosys'}});
employees.push({name:'Purushotham', age:35, hobbies:['Sports'], job:{salary:1600000, company: 'INfosys'}});
employees.push({name:'Anil', age:36, hobbies:['Movies'], job:{salary:1700000, company: 'INfosys'}});


console.log(employees);

