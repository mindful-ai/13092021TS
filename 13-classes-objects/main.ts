interface empData{
    name:string;
    age: number; 
    company:string; 
    salary: number;
}

class employee{

    // ------ data section
    name: string;
    age: number;
    company: string;
    grossSalary: number;
    netSalary: number;
    taxPct: number


    // ------ constructor
    constructor(data: empData){
        this.name = data.name;
        this.age = data.age;
        this.company = data.company;
        this.grossSalary = data.salary;
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

interface empDataNew extends empData{
    phone?: string;
    dob?:string;
}

class newEmployee extends employee{

    // ---------------- data section: new properties added
    phone: string;
    dob: string;
    age: number;

    constructor(empData: empDataNew){
        super(empData);
        this.phone = empData.phone;
        this.dob = empData.dob;

    }

    // -------------------- functions

    showInfo(): void{
        super.showInfo();
        console.log('Phone       : ', this.phone);
        console.log('Age         : ', this.calcAge());
        console.log('--------------------------------------');        
    }

    calcAge(): number{
        this.age = 30;
        return this.age;
    }


}


// ---------------------------------------------------------------------------------- //

let d1: empData = {'name':"Anil", 'age': 35, 'company':"Oracle", 'salary': 1500000}

let e1: employee = new newEmployee(d1);
let e2: employee = new newEmployee(d1);
let e3: employee = new newEmployee(d1);

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
