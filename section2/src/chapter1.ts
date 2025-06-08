//number 
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number =-0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;


//ts에서는 type annotation (주석) 이라고 부르며, 변수를 정의하는 가장 기본적인 방식임

//문자열을 말하는 string type

let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`; //템플릿 리터럴도 가능함


//boolean

let bool1:boolean = true;
let bool2:boolean = false;

//null
let null1 : null = null;

//undefined 
let unde1: undefined = undefined;

let numb : number = null;  
//컴파일러 옵션을 저장할 경우 가능함 , 임시로 null check

//리터럴 타입

let numA : 10 = 10;
let strA: "hello" = "hello";
let boolA : true = true;