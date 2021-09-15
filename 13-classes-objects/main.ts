class employee{

    // ------ data section
    name: string;
    age: number;
    company: string;
    grossSalary: number;
    netSalary: number;
    taxPct: number


    // ------ constructor
    constructor(name:string, age: number, company:string, salary: number){
        this.name = name;
        this.age = age;
        this.company = company;
        this.grossSalary = salary;
    }

    // ------ functions
    showInfo(): void{
        console.log('--------------------------------------');
        console.log('Name      : ', this.name);
        console.log('Age       : ', this.age);
        console.log('Salary    : ', this.grossSalary);
        console.log('--------------------------------------');
        console.log('Tax       : ', this.taxPct, "%");
        console.log('Take Home : ', this.netSalary);
        console.log('--------------------------------------');
    }

    calcTax(pct: number): number{
        this.taxPct = pct;
        this.netSalary = this.grossSalary - (this.grossSalary * pct/100);
        return this.netSalary;
    }
}


// ---------------------------------------------------------------------------------- //

let e1: employee = new employee("Anil", 35, "Oracle", 1500000);
let e2: employee = new employee("Sunil", 36, "Oracle", 1600000);
let e3: employee = new employee("Raj", 37, "Oracle", 1700000);

let employees: employee[] = [];

employees.push(e1);
employees.push(e2);
employees.push(e3);

let emp: employee;
for(emp of employees){
    console.log(emp.showInfo());
}

for(emp of employees){
    console.log(emp.calcTax(15));
}


console.log('After Taxation');
for(emp of employees){
    console.log(emp.showInfo());
}