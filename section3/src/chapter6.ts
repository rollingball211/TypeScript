/**
 * 타입 단언
 */

type Person = {
    name : string;
    age : number;
};

let person = {} as Person;
person.name = "김진현";
person.age = 27;


type Dog = {
    name : string;
    color : string;
};

let dog : Dog = {
    name : "돌돌이",
    color : "brown",
    breed : "진도", 
} as Dog; 


/**
 * 타입 단언의 규칙 
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입 이거나 
 * A가 B의 서브타입 이어야 함 
 */

let num1 = 10 as never; //10은 number 이고, never는 모든 타입의 서브타입임
let num2 = 10 as unknown; //ok
//let num3 = 10 as string; // error

let num3 = 10 as unknown as string; // error


/**
 * const 단언
 */

let num4 = 10 as const;
//const와 동일한 선언을 하는것과 같은 효과를줌 

let cat = {
    name : "야옹이",
    color: "yellow",
} as const;

/**
 * Non Null 단언
 */

type Post = {
    title: string;
    author?: string; //선택적 프로퍼티
};

let post: Post = {
    title : "게시글1",
    author: "김지년"
}

const len : number = post.author?.length; //optional chaining
//author property의 값이 null / undefined 일 경우엔 해당 값을 undefined로 만든다
//optinal chaining을 사용하면 undefined가 될 수 있으나, number 타입으로 지정했기 때문에 에러가 발생함