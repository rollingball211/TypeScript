/**
 * 함수 타입의 호환성
 * - 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가?를 판단
1. 반환값의 타입이 호환되는가?
2. 매개변수의 타입이 호환되는가?    
 */


//기준1. 반환값이 호환되는가?
type A = () => number;
type B = () => 10;

let a:A = ()=>10;
let b:B = ()=>10; //넘버 리터럴 타입

a = b; // 업캐스팅(o)
//b = a;  //다운캐스팅 (x)

//기준2 . 매개변수가 호환되는가
//2-1  매개변수의 개수가 같을 때
type C = (value : number) => void;
type D = (value : 10) => void;

let c:C = (value) => {};
let d:D = (value) => {};
//매개변수 기준으로는 업캐스팅이 되지 않고 다운캐스팅이 됨

//c = d; // 업캐스팅(x)
d = c; // 다운캐스팅(o)

type Animal = {
    name: string;
}

type Dog = {
    name :string;
    color:string;
};

let animalFunc = (animal:Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog :Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

//animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal:Animal) => {
    console.log(animal.name);
   // console.log(animal.color);
}

let testFunc2 = (dog :Dog) => {
    console.log(dog.name);
}
//함수타입 A와 B가 있을때, A가 B의 슈퍼타입이라면,  업캐스팅은 불가능하다
//반대로 B의 매개변수인 타입인 animal은 다운캐스팅이기 때문에 가능하다.
//
//2-2  매개변수의 개수가 다를 때

type Func1 = (a:number,b:number) => void;
type Func2 = (a: number) => void;
let func1: Func1 = (a,b)=>{};
let func2: Func2 = (a) => {};


func1 = func2;
//func2 = func1;  

//매개변수의 개수가 다를 때에는 매개변수의 갯수가 더 적을때에만 호환이 된다. 
//타입이 다르면 당연히 안된다