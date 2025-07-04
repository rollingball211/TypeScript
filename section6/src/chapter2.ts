/**
 * access modifier
 */

class Employee  {
//생성자
    constructor(  
        private name: string, 
        protected age: number,
        public position: string
    ) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() {
        console.log(`${this.name}`);
    }
}

const employee = new Employee("abc",22,"developer")
//employee.name = "132";
