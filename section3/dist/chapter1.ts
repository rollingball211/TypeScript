/**
 Unknown 타입
 */

 function unknownExam() {
    let a : unknown =1;
    let b : unknown ="hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;
    //모든 값 업캐스팅 가능함

    let unknownVar : unknown;

    // let num : number = unknownVar; //downcasting 에러
    // let str : string = unknownVar;//downcasting 에러
    // let bool : boolean = unknownVar;//downcasting 에러

 }

 /**
  * Never 타입
  */

 function NeverExam() {
    
    function neverFunc() :never {
        while(true) {}
    }
    //함수 반환 공집합, 반환값이 없다.

    let num:number = neverFunc();
    let str: string = neverFunc();
    let bool : boolean = neverFunc();
    //모든 타입의 서브타입이기 때문에 업캐스팅으로 가능함
    //반대로는 안됨

   // let never1: never = 10;
   // let never2: never = "string"

 }


 /*
void 타입
 */

function voidExam() {
    function voidFunc() : void {
        console.log("hi");
        return undefined;
    }

    let voidVar : void = undefined;

}

//undefined 타입의 supertype


/* 
Any 타입
*/

function anyExam() {
    let unknownVar : unknown;
    let anyVar : any;

    anyVar = unknownVar;
}