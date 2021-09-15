var employee = /** @class */ (function () {
    // ------ constructor
    function employee(name, age, company, salary) {
        this.name = name;
        this.age = age;
        this.company = company;
        this.grossSalary = salary;
    }
    // ------ functions
    employee.prototype.showInfo = function () {
        console.log('--------------------------------------');
        console.log('Name      : ', this.name);
        console.log('Age       : ', this.age);
        console.log('Salary    : ', this.grossSalary);
        console.log('--------------------------------------');
        console.log('Tax       : ', this.taxPct, "%");
        console.log('Take Home : ', this.netSalary);
        console.log('--------------------------------------');
    };
    employee.prototype.calcTax = function (pct) {
        this.taxPct = pct;
        this.netSalary = this.grossSalary - (this.grossSalary * pct / 100);
        return this.netSalary;
    };
    return employee;
}());
// ---------------------------------------------------------------------------------- //
var e1 = new employee("Anil", 35, "Oracle", 1500000);
var e2 = new employee("Sunil", 36, "Oracle", 1600000);
var e3 = new employee("Raj", 37, "Oracle", 1700000);
var employees = [];
employees.push(e1);
employees.push(e2);
employees.push(e3);
var emp;
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    emp = employees_1[_i];
    console.log(emp.showInfo());
}
for (var _a = 0, employees_2 = employees; _a < employees_2.length; _a++) {
    emp = employees_2[_a];
    console.log(emp.calcTax(15));
}
console.log('After Taxation');
for (var _b = 0, employees_3 = employees; _b < employees_3.length; _b++) {
    emp = employees_3[_b];
    console.log(emp.showInfo());
}
