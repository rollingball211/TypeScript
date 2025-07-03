/**
 * 인터페이스
 */

interface Person {
    readonly name : string;
    age? : number;
    sayHi() : void; //함수 타입 표현식도 가능함
    sayHi(a:number,b:number) : void;
    //sayHi: () => void; 
} //선택적 프로퍼티 가능

const person : Person = {
    name : "이정환",
    age : 27,
    sayHi : function () {
        console.log("hi");
    }
};


type Type1 = number | string | Person;
type Type2 = number & string & Person;


const person1 : Person | number = {
    name : "이정환",
    age : 27,
    sayHi : function () {
        console.log("hi");
    }
};
