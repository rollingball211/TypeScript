//Any , Unknown

//Any
//특정 변수의 타입을 확실히 모를때 사용함

let anyVar : any = 10;
anyVar = "hello"

anyVar = true;
anyVar = {};
anyVar = () => {};
anyVar.toUpperCase();
anyVar.toFixed();


let num : number = 10; 
num = anyVar;

let unknownVar : unknown;