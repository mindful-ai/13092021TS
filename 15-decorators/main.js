var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorate(arg) {
    console.log("This is intended to be a decorator!");
    return arg('Purushotham');
}
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log(" ---> first(): called", 'target =', target, 'propertyKey =', propertyKey);
        console.log('Descriptor ', descriptor);
        console.log(target.getName('Mr.'));
    };
}
var person = /** @class */ (function () {
    function person(n) {
        this.name = "Ram";
        this.name = n;
        console.log("This is the constructor!", this.name);
    }
    person.prototype.getName = function (salutation) {
        return this.name;
    };
    __decorate([
        first()
    ], person.prototype, "getName", null);
    person = __decorate([
        decorate
    ], person);
    return person;
}());
var p = new person();
console.log(p.getName());
