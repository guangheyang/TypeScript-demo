abstract class Chess {
    x: number = 0
    y: number = 0
    abstract readonly name: string
    // abstract move (targetX :number, targetY: number): boolean

    // protected isOutSide(): boolean {
    //     console.log('1.边界判断');
    //     return false
    // }

    // protected targetHasMengyou(): boolean {
    //     console.log('2.目标位置是否有己方棋子');
    //     return false
    // }

    // protected finish(targetX: number, targetY: number) {
    //     console.log('3.棋子移动规则');
    //     this.x = targetX
    //     this.y = targetY
    //     console.log(`${this.name}移动成功`)
    // }
    move (targetX: number, targetY: number) {
        console.log('1.边界判断');
        console.log('2.目标位置是否有己方棋子');
        if (this.rule(targetX, targetY)) {
            this.x = targetX
            this.y = targetY
            console.log(`${this.name}移动成功`)
            return true
        }
    }
    protected abstract rule(targetX: number, targetY: number): boolean;
}

class Horse extends Chess {
    protected rule(targetX: number, targetY: number): boolean {
        return true
    }
    // move(targetX: number, targetY: number): boolean {
    //     console.log('1.边界判断');
    //     console.log('2.目标位置是否有己方棋子');
    //     console.log('3.棋子移动规则');
    //     this.x = targetX
    //     this.y = targetY
    //     console.log(`${this.name}移动成功`)
    //     return true
    // }

    readonly name: string = '马';
}

class Pao extends Chess {
    protected rule(targetX: number, targetY: number): boolean {
        return false
    }
    // move(targetX: number, targetY: number): boolean {
    //     this.x = targetX
    //     this.y = targetY
    //     console.log(`${this.name}移动成功`)
    //     return true
    // }
    name: string
    constructor() {
        super()
        this.name = '炮'
    }
}

class Slodier extends Chess {
    protected rule(targetX: number, targetY: number): boolean {
        return true
    }
    // move(targetX: number, targetY: number): boolean {
    //     this.x = targetX
    //     this.y = targetY
    //     console.log(`${this.name}移动成功`)
    //     return true
    // }
    get name() {
        return '兵'
    }
}

class King extends Chess {
    name: string = '帅';
    protected rule(targetX: number, targetY: number): boolean {
        return true
    }
    
}

const h = new Horse();
const p = new Pao();
const s = new Slodier();
const k = new King();

h.move(1, 2)
p.move(1, 2)
s.move(1, 2)
k.move(1, 2)
