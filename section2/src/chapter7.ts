//void 
//void -> 공허 -> 아무것도 없다 -> 아무것도 없음을 의미하는 타입

function func1(): string {
    return "hello";
}

//함수도 타입 지정 가능

function func2(): void {
    console.log("hello");
}
//func2의 반환 타입은 void가 됨

let a:void;
// a=1;
// a="3";

//void로 정의한 변수엔 아무것도 담을 수 없음,
//undefined 는 가능

//Never -> 존재하지 않거나 불가능한 타입

function func3() : never {
    while(true) {}
}

function func4() :never {
    throw new Error();
}

//정상적으로 종료되지 않아 함수에 반환값이 있는 것 자체가 모순일 경우에 사용

let b  : never;
// b = 1;
// b= undefined;
// b= null;