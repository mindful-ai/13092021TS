export const pi = 3.14159;
export const phi = 1.66;
export function sum(n1, n2) {
    return n1 + n2;
}
export class circle {
    constructor(r) {
        this.radius = r;
    }
    area() {
        return pi * Math.pow(this.radius, 2);
    }
    circumference() {
        return 2 * pi * this.radius;
    }
}
