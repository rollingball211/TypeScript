/**
 * Generic
 */

function func<T> (value : T) : T {
    return value;
}

let num = func(10);


let arr = func([1,2,3] as [number,number,number]);
let arr2 = func([1,2,3]);

let arr3 = func<[number,number,number]>([1,2,3]);

