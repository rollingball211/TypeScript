/**
 * 
 */

function swap<T, U>(a: T ,b : U) {
    return [b,a];
}

const [a,b] = swap("1",2);

/**
 * 두번째 사례
 */
//배열의 첫 요소를 반환, 
//데이터 매개변수의 타입을 튜플타입으로 사용하면, 처음 오는 요소의 타입을 알수 있음
function returnFirstValue<T>(data : [T,...unknown[]]) : T {
    return data[0];
}   

let num = returnFirstValue([0,1,2]);

let str = returnFirstValue([1,"hello","mynameis"]);


/**
 * 세번째 사례
 */

function getLength<T extends {length: number}> (data: T) {
    return data.length;  //data가 T일 경우, unknown 타입의 length를 확실하게 구할 수 없어 에러가 발생함
}

let var1 = getLength([1,2,3]); //3 
let var2 = getLength("12345"); // 5
let var3 = getLength({length:10}); //10
//let var4 = getLength(10); 