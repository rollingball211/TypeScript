/**
 * 제네릭 클래스
 */


class NumberList { //generic class로 만들것임
    constructor(private list : number[]) {
        this.list = list;
    }

    push(data : number) {
        this.list.push(data);    
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const numberList = new NumberList([1,2,3]);
numberList.pop();
numberList.push(4);
numberList.print();
