export const pi  = 3.14159;
export const phi = 1.66;

export function sum(n1: number, n2: number): number{
    return n1 + n2;
}

export class circle{
    radius: number;
    constructor( r: number){
        this.radius = r;
    }
    area(){
        return pi * this.radius**2;
    }
    circumference(){
        return 2 * pi * this.radius;
    }
}
