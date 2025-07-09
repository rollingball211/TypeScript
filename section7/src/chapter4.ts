/**
 * 제네릭 클래스
 */


class List<T>  { //generic class로 만들것임
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

const numberList = new List([1,2,3]);
numberList.pop();
numberList.push(4);
numberList.print();
