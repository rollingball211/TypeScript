/**
 * 타입 추론
 */


//어떤 상황에서 잘 추론하고 어떤 원리로 하는가?

//1. 일반적인 변수를 선언하는 상황

let a = 10;
let b = "hello";
let c = {
    id : 1,
    name : "aaa",
    profile : {
        nickname : "abc"
    },
    urls: "{ab2@dabc.com}"
};


let { id, name , profile} = c;

let [one,two,three] = [1,"hello",true];

function func(message="hello") {
    return "hello";
}

let d; //초기값 생략
d =10; //d는 number 로 지정됨
d.toFixed(); // okay

d= "hello" //타입이 변경됨

const num = 10;

let arr = [1,"string"];