/**
 * 인터페이스와 클래스
 */

interface CharcterInterface {
    name : string;
    moveSpeed: number;
    move() : void;
}

class Charater implements CharcterInterface{
    name : string;
    moveSpeed: number;
    private extra :string;
    constructor(name : string, moveSpeed: number, extra:string) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        this.extra = extra;
    }

    move() : void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}