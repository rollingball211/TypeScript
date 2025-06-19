/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기함
 */

//value => number : toFixed
//value => string ; toUpperCase
//value => Date : getTime
type Person = {
    name : string;
    age : number;
}

function func(value: number | string | Date | null |Person) {
    if (typeof value ==='number') {
        console.log(value.toFixed()) ;

    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if ( value instanceof Date) {
        console.log(value.getTime());
    }
    else if (value && "age" in value ) {
        console.log(`${value.name}, ${value.age} `);
    }
    //value가 있을때에만 검사한 후에 조건문 작성
}


