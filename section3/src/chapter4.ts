/*
대수 타입
-> 여러개의 타입을 합성해 새롭게 만들어 낸 타입
-> 합집합 타입 / 교집합 타입
*/


/**
 * 1. 합집합 타입 - Union 타입
 */

let a: string | number | boolean;  //a라는 변수는 union type으로 정의됨
a = 1 ;
a = "hi" 

let arr: (number | string | boolean) [] = [1, "hello",true];

//객체 타입의 union

type Dog  = {
    name : string;
    color : string;
}

type Person = {
    name : string;
    language: string;
};

type Union1 = Dog | Person

let union1 : Union1 = {
    name : "",
    color : "",
} ;

let union2 : Union1 =  {
    name : "",
    language: "",
}

let union3 : Union1 =  {
    name : "",
    color : "",
    language: "",
}

// let union4 : Union1 = {
//     name : "",
// }

//에러 발생

/**
 * 교집합 - InterSection
 */

let variable: number & string; 

type InterSection = Dog & Person;

let interSection: InterSection = {
    name: "12144",
    color: "blue",
    language : "123",
}