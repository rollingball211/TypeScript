/**
 * ts class
 */

class Employee  {
    name: string;
    age: number ;
    position: string;
//생성자
    constructor( name: string,age: number,position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() {
        console.log("일함");
    }
}

const employee13 = new Employee("김진현",10,"개발자");
console.log(employee13);
employee13.work();

const employeeC: Employee = {
    name: "",
    age : 0,
    position: "",
    work() {       
    },
};

class ExecutiveOfficer extends Employee {
    
}

