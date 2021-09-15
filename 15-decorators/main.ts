function decorate(arg: Function){
    console.log("This is intended to be a decorator!");
    return arg('Purushotham');
}

function first() {
        console.log("first(): factory evaluated");
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
          console.log(" ---> first(): called", 'target =', target, 'propertyKey =',  propertyKey);
          console.log('Descriptor ',  descriptor);
          
        };
}
    

@decorate
class person{
    name: string = "Ram";
    constructor(n?: string){
        this.name = n;
        console.log("This is the constructor!", this.name)
    }

    @first()
    getName(salutation?: string){
        return this.name;
    }

}

let p = new person();
console.log(p.getName());
