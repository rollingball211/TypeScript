//배열 기본 정의
let numArr:number[] = [1,2,3];

let strArr:string[]= ["hello","im","hyeon"];

let boolArr:Array<boolean> =[true,false,true];
//Generic 문법

//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr:(string|number)[] = [1 , "hello"];

//다차원 배열의 타입을 정의하는 경우
let doubleArr:number[][]  = [
    [1,2,3],
    [4,5],
]
//tuple => 길이와 타입이 고정된 배열
let tup1:[number,number] = [1,2];
let tup2:[number,string,boolean]= [1,"2",true];

//순서가 달라지거나 길이가 다르다면 오류가 발생함

//튜플은 배열이기 때문에, push와 pop을 이용해 값을 추가하거나 지울수 있음

tup1.push(1); //배열 메소드를 사용할때는 에러가 발생하지 않음
tup1.pop();

