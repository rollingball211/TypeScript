/**
 * 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의함
 * 
 */

//overload signature , 매개변수별로 각각 다르다
function func(a:number):void;
//시그니쳐의 매개변수 개수 차이가 있을때, 선택적 프로퍼티를 이용함, 위에 선언한 시그니쳐의 존재가 의미가 있게 하기 위해서
function func(a:number,b:number,c:number):void;

//실제 구현부 -> 구현 시그니쳐

function func(a:number,b?:number,c?:number) {
    if (typeof b === "number" && typeof c=== "number") {
        console.log(a+b+c);
    } else {
        console.log (a *20);
    }
}

func(1);
func(1,2,3);

