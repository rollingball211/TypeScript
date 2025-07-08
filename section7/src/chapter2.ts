/**
 * map method
 */

const arr = [1,2,3];
const newArr = arr.map((it) => it *2);
//[2,4,6]
//map method를 이용해 만듬

function map<T, U>(arr:T[],callback:(item:T) => U) {
    let result = []; //결과값 저장

    for (let i = 0; i< arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

map(arr,(it) => it*2);
map(['hi','hello'],(it) => it.toUpperCase());

/**
 * foreach
 */

arr.forEach((it)=> console.log(it));

function forEach<T>(arr:T[], callback:(item:T) => void) {
    for (let i = 0; i<arr.length; i++) {
        callback(arr[i]);
    }
}

forEach(arr,(it) => {
    console.log(it.toFixed());
})
