/**
 * 인터페이스 확장
 */

interface Animal {
    name : string;
    age : number;
}

interface Dog extends Animal{
    isBark : boolean;
}
const dog : Dog = {
    name : "",
    age : 1,
    isBark : true
}



interface Cat extends Animal {
    isScratch : boolean;
}

interface Chicken extends Animal {
    isFly : boolean;
}

//중복된 프로퍼티가 많다