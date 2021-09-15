// Command to be used for compilation:
// tsc --target ES5 --experimentalDecorators main.ts

function logData(message:string): ClassDecorator {
    console.log(`Message is: ${message}`)
    return function (): void {
        console.log('constructor')
    }
}

function logProperty(message:string): PropertyDecorator {
    console.log(`[Property 🟡] Message is: ${message}`)
    return function (): void {
        console.log('[Property 🟡] constructor')
    }
}

function logMethod(message: string): MethodDecorator {
    console.log(`[Method 🟠] Message is: ${message}`)
    return function (): void {
        console.log('[Method 🟠] constructor')
    }
}

@logData("Hello world")
class User {
    @logProperty("Property Message")
    public firstName: string;
    public lastName: string;


    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @logMethod("Method Message")
    getFullName():string{
        return `${this.firstName} ${this.lastName}`;
    }
}

//const user = new User('John', 'Doe');
//console.log(user.getFullName())