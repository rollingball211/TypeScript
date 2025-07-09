/**
 * 프로미스
 */

const promise = new Promise<number>( (resolve,reject) => {
    setTimeout( () => {
        //resolve(20);
        reject("~로 실패");
    }, 3000);
});

promise.then((response)=> {
    console.log(response * 10);
})

promise.catch((err) => {
    if(typeof err === "string") {
        console.log(err);
    }
});

//실패했을때의 타입은 정의할 수 없다. 
//타입을 적지 않는다면 unkwown type으로 정해진다.

/**
 * 프로미스를 반환하는 함수의 타입을 정의하기
 */

interface Post {
    id: number;
    title : string;
    content : string;
}

function fetchPost() : Promise<Post> {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "게시글 제목",
                content : "게시글 컨텐츠",
            });
        },3000);
    });
}

const postRequest = fetchPost();
postRequest.then((post) => {
    post.id
})