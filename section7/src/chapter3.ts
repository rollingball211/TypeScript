/**
 * 제네릭 인터페이스
 */

import { profile } from "console";

interface KeyPair<K,V>{
    key : K;
    value : V;
}

let keyPair: KeyPair<string, number> = {
    key: "key",
    value : 0,
}

let keyPair2 : KeyPair<boolean,string> = {
    key : true,
    value : "123",
}

/**
 * index signature
 */

interface NumberMap {
    [key:string]: number;
}

let numbermMap1 : NumberMap = {
    key: -1234,
    key2: 123414,
};

interface Map<V> {
    [key:string] : V;
}

let stringMap : Map<String> = {
    key:"value",
}

let booleanMap : Map<boolean> = {
    key: true
}

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key : string]: V;
}

let stringMap2 : Map2<string> = {
    key: "hello"
}

/**
 * 제네릭 인터페이스 활용예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
    type : "student";
    school : string;
}
interface Developer {
    type : "developer";
    skill : string;
}

interface User<T> {
    name : string;
    profile : T;
}


function goToSchool(user: User<Student>) {
    const school =  user.profile.school;
    console.log(`${school}로 등교 완료!`);
}//학생 전용 함수


const developerUser : User<Developer> = {
    name : "김진현",
    profile : {
        type: "developer",
        skill : "Ts"
    }
}

const studentUser : User<Student> = {
    name : "김진현",
    profile : {
        type: "student",
        school : "cat"
    }
}

// goToSchool(developerUser)