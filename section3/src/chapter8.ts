/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

//웹 서비스의 간단한 회원 관리 기능
//분류는 3가지

type Admin = {
    tag :"ADMIN",
    name : string;
    kickCount : number;
};

type Member = {
    tag :"MEMBER",
    name: string;
    point:  number;

};

type Guest = {
    tag :"GUEST",
    name: string;
    visitCount : number;
}

type User = Admin | Member | Guest;

function login(user:User) {
    if (user.tag == "ADMIN") {
        console.log(`${user.name}님 ${user.kickCount} 만큼 강퇴했습니다.`)
    } else if ( user.tag == "MEMBER") {
        console.log(`${user.name}님 ${user.point} 만큼 모았습니다.`)
    }else if (user.tag == "GUEST") {
        console.log(`${user.name}님 ${user.visitCount} 만큼 방문했습니다.`)

    }
}

function login2(user:User) {
    switch(user.tag) {
        case 'ADMIN' :
            console.log(`${user.name}님 ${user.kickCount} 만큼 강퇴했습니다.`)
            break;
        case "MEMBER" :
            console.log(`${user.name}님 ${user.point} 만큼 모았습니다.`)
        break;
        case "GUEST" :
            console.log(`${user.name}님 ${user.visitCount} 만큼 방문했습니다.`)
        break;
    }
}
//서로소 유니온 적용

/**
 * 하나의 사례 추가
 * 비동기 작업의 결과를 처리하는 객체
 */
//state가 LOADING 이면 error/ response 없음

type LoadingTask = {
    state : "LOADING";
} 

type FailedTask = {
    state: "FAILED";
    error : {
        message : string;
    }
}

type SuccessTask = {
    state : "SUCCESS";
    response: {
        data :string;
    }
}
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

//로딩 중 => 콘솔에 로딩중 출력
//실패 => 에러메세지 출력
//성공 => 데이터 출력

function processResult(task:AsyncTask) {
    switch(task.state) {
        case "LOADING":{
            console.log("로딩 중");
            break;
        }
        case "FAILED" : {
            console.log(`에러 발생 : ${task.error.message}`);
            break;
        }
        case "SUCCESS" : {
            console.log(`에러 발생 : ${task.response.data}`);
            break;
        }
    }
}

const loading: AsyncTask = {
    state : "LOADING",
};

const failed : AsyncTask = {
    state: "FAILED",
    error : {
        message : "오류 발생 원인은 ~~",
    },
};
const success : AsyncTask = {
    state : "SUCCESS",
    response : {
        data: "데이터~~~~~~",
    },
};