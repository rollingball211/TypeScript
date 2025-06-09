//object
let user:object = {
    id : 1,
    name : "김진현",
};

//object 타입으로 .을 찍어 접근할 경우 에러가 발생함

let user2 : {
    id : number;
    name: string; 
} = {
    id : 1,
    name : "김진현"
}

user2.id;

let dog : {
    name : string;
    color : string;
} = {
    name : "돌돌이",
    color : "brown",
};
//구조를 기반으로 타입을 정의함, => 구조적 타입 시스템

let user3 : {  //선택적 프로퍼티?
    id? : number;
    name: string; 
} = {
    id : 1,
    name : "김진현"
}

user3 = {
    name : "홍길동",
}

let config : {
    readonly apiKey :string;
} = {
    apiKey:"MY_API_KEY"
};

//config.apiKey = "hacked"