/**
 * 선언 합침 
 */

interface Person  {
    name : string;
}

interface Person {
    name :string;
    age : number;
}

const person : Person = {
    name : "",
    age : 27
}

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string
}

const lib : Lib = {
    a: 1,
    b: 1,
    c: "hello"
}

