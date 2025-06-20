/**
 * 함수 타입 정의
*/

function func(a:number,b:number) : number {
    return a + b;
}

//반환값이 없어도 return문으로 추론이됨 위의 경우는 number로 자동 추론이 됨

/*
화살표 함수의 타입을 정의하는 방법
*/

const add = (a:number , b:number) => a + b;

/*
함수의 매개변수
*/

function introduce (name = "123", tall?:number) {
    console.log(`${name}`);
    if (typeof tall === "number") { //undefined 방지
        console.log(`${tall}`);
    }

    

}

introduce("123",111);


//1 타입 지정 후 기본값이 타입에 맞지 않으면 에러 발생
//2.함수를 부를때 introduce(1) 이런식으로 타입에 맞지 않게 호출하면 에러 발생
//3. 매개변수 뒤 ? 는 선택적 프로퍼티처럼 동작함 (선택적 매개변수)
//4. 선택적 매개변수는 필수 매개변수 앞에 오면 에러가 발생함


function getSum(...rest:number[]) {   //
    let sum = 0;
    rest.forEach( (it) => (sum += it));

    return sum;
}

getSum(1,2,3);
getSum(1,2,3,4,5);