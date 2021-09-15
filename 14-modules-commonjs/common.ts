const pi  = 3.14159;
const phi = 1.66;

function sum(n1: number, n2: number): number{
    return n1 + n2;
}

class circle {
    radius: number;
    constructor(r: number) {
        this.radius = r;
    }
    area() {
        return pi * Math.pow(this.radius, 2);
    }
    circumference() {
        return 2 * pi * this.radius;
    }
}

module.exports{
    pi,
    phi,
    sum,
    circle,
}

