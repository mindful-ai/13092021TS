// ---------------------------- typecasting
// let input = document.querySelector('input["type="text"]') // Doesn't work
var input = document.querySelector('input["type="text"]');
console.log(input.value);
// ---------------- unknown types
var userID;
var userName;
var userData;
userID = "67555_";
userName = "Purushotham";
// When it is not appropriate to do an operation on unknown type
// Do a manual type check
if (typeof userID === 'string') {
    userData = userID + userName;
}
console.log(userData);
// -------------------------- never type
function genErrorReport(message, code) {
    throw { message: message, errorCode: code };
}
genErrorReport("This is an error!", '1234');
