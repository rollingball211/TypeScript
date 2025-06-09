//타입 별칭 (alias)
let user : {
    id : number;
    name: string;
    nickname : string;
    birth : string;
    bio:string;
    location:string;
} = {
    id : 1,
    name: "김진현",
    nickname : "공",
    birth : "1013",
    bio: "hi",
    location:"seoul",
}

//새 유저가 늘어난다면 코드의 중복이 일어남 

type User = {
    id : number;
    name: string;
    nickname : string;
    birth : string;
    bio:string;
    location:string;
}
//타입 별칭으로 만든 유저 생성 완료


//함수 안 스코프에선 상관없음
function a () {
    type User = {
        id : number;
        name: string;
        nickname : string;
        location:string;
    }
}

let user2 : User = {
    id : 1,
    name: "김진현",
    nickname : "공",
    birth : "1013",
    bio: "hi",
    location:"seoul",
}

//인덱스 시그니쳐

//타입 별칭에도 프로퍼티의 키를 넣어줘야 함
type CountryCodes={
  [key : string] : string;
}

let countryCodes : CountryCodes = {
    Korea : "ko",
    UnitedState : "us",
    UnitedKingdom: "uk",
}

type CountryNumberCodes = {
    [key: string] : number;
    Korea : number
}


let countryNumberCodes : CountryNumberCodes = {
    Korea : 410,
    UnitedState : 840,
    UnitedKingdom : 826
}

