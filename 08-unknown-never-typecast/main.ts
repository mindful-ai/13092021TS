// ---------------------------- typecasting

// let input = document.querySelector('input["type="text"]') // Doesn't work
let input = document.querySelector('input["type="text"]')! as HTMLInputElement;
console.log(input.value); 

// ---------------- unknown types

let userID: unknown;
let userName: string;
let userData: string;

userID = "67555_";
userName = "Purushotham";

// When it is not appropriate to do an operation on unknown type
// Do a manual type check

if(typeof userID === 'string'){
    userData = userID + userName;
}
console.log(userData);

// -------------------------- never type

function genErrorReport(message: string, code: string): never {
    throw { message: message, errorCode: code};
}

genErrorReport("This is an error!", '1234');





