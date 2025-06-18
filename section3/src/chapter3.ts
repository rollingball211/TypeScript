/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;
num1 = num2; //허용  -> upcasting


/*
객체 타입간의 호환성
*/


type Animal = {
    name : string;
    color : string;
};

type Dog = {
    name : string;
    color : string;
    breed : string;   
}


let animal : Animal = {
    name: "기린",
    color : "yellow"
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed : "진도"
};

animal = dog;
//dog = animal; //에러 발생


type Book = {
    name : string;
    price: number;
};

type ProgrammingBook = {
    name : string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "책1",
    price : 330000,
    skill : "reactjs"
}

book = programmingBook; // ok!
//programmingBook = book; // no

let book2 : Book = {
    name: "책1",
    price : 330000,
  //  skill : "reactjs"
}

let book3 :Book = programmingBook;

function func(book: Book) {
    func({
        name: "책1",
        price : 330000,
      //  skill : "reactjs"
    });
    func(programmingBook); //변수에 저장했다 인수로 전달해야함
}

