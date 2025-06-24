/**
 * 사용자 정의 타입가드
 */
//타입에 손을 댈 수 없다고 가정함 


type Dog = {
    name : string;
    isBark : boolean;
}

type Cat = {
    name : string;
    isScratch: boolean;
};

type Animal = Dog | Cat;

//사용자 타입 가드
function isDog(animal:Animal):animal is Dog {
    return (animal as Dog).isBark ! == undefined;
} //타입 단언하기

function isCat(animal:Animal): animal is Cat {
    return (animal as Cat).isScratch ! == undefined;
}


function warning (animal : Animal) {
    if (isDog(animal)) {
        animal;
    } 
}