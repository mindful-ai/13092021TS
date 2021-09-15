// ---------------------------------- optional, default arguments

function loginMessage(userID: string, message: string): void{
    let today = new Date().toISOString();
    console.log(today, message, userID || 'Not signed in')
}


function loginMessage2(userID: string, message: string = "Logged in"): void{
    let today = new Date().toISOString();
    console.log(today, userID, message || 'Not signed in')
}


function loginMessage3(message: string, userID?: string, name?: string): void{
    let today = new Date().toISOString();
    console.log(today, userID, name, message || 'Not signed in')
}

loginMessage("556456", "Logged in to server@124.56.45.3");
loginMessage2("556456");
loginMessage2("556456", "New message");
loginMessage3("New login @123.44.55.6");
loginMessage3("New login @123.44.55.6", "67PU34", "Purushotham");

// ----------------------------- variable number of arguments: rest arguments

// This code works in javascript
/*
function sumVariadic(): number {
            return Array
            .from(arguments)
            .reduce((total, n) => total + n, 0)
}
*/
// sumVariadic(1, 2, 3) // evaluates to 6 in JS

function newVariadic(...numbers: number[]){
    console.log(numbers);
    console.log('Reduced to: "' + numbers.reduce((a, b) => a + b));
}

newVariadic(1,2,3);
newVariadic(1,2,3,4,5);

// --------------------------------- call, apply, bind, typing this

function fancyDate() {
     return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}` // 14/5/2021
}
//console.log(fancyDate()); // TS was not able to capture the problem here
console.log(fancyDate.call(new Date));

function fancyDate2(this: Date) {
     return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}` // 14/5/2021
}
//console.log(fancyDate2()); // TS is now able to identify the problem
console.log(fancyDate2.call(new Date));

