/**
 * Class
 */

let studentA = {
    name : "김진현",
    grade : "A",
    age: 27,
};

let studentB = {
    name : "김진",
    grade : "B",
    age: 17,
  
};


class Student {
    //필드
    name;
    grade;
    age;
    //생성자
    constructor(name,grade,age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    study() {
        console.log("공부해");
    }
    introduce() {
        console.log(`안녕하세요 ${this.name} 입니다.`);
    }
}
class StudentDeveloper extends Student {
  
    favoriteSkill;

    constructor(name,grade,age,favoriteSkill) {
        super(name,grade,age)
        this.favoriteSkill = favoriteSkill;
    }
    programming() {
        console.log(`${this.favoriteSkill}`);
    }
}

const studentDeveloper = new StudentDeveloper("김진현","A+",25,"Ts")
console.log(studentDeveloper);
studentDeveloper.programming();


//Instance (클래스를 이용해 만든 객체)
let studentC = new Student("이용성","A",28);
console.log(studentC);
studentC.study();
studentC.introduce();

