/**
 * 함수 타입 표현식
 */

//funciton type expression
//타입의 별칭을 지정해 함수에 적용
type Opeartion = (a: number, b : number) => number;

const add: Opeartion = (a, b) =>  a + b;
const sub : Opeartion= (a,b) => a - b;
const multiply : Opeartion= (a,b) => a * b;
const divide : Opeartion= (a,b) => a / b;


/**
 * 호출 시그니쳐 
 * (콜 시그니쳐)
 */

type Opeartion2 = {
    (a:number, b : number) : number;
    name : string;
};

const add2: Opeartion2 = (a, b) =>  a + b;
const sub2 : Opeartion2= (a,b) => a - b;
const multiply2 : Opeartion2= (a,b) => a * b;
const divide2 : Opeartion2= (a,b) => a / b;
