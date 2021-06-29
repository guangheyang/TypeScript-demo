class Chess {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    move(targetX, targetY) {
        console.log('1.边界判断');
        console.log('2.目标位置是否有己方棋子');
        if (this.rule(targetX, targetY)) {
            this.x = targetX;
            this.y = targetY;
            console.log(`${this.name}移动成功`);
            return true;
        }
    }
}
class Horse extends Chess {
    constructor() {
        super(...arguments);
        this.name = '马';
    }
    rule(targetX, targetY) {
        return true;
    }
}
class Pao extends Chess {
    constructor() {
        super();
        this.name = '炮';
    }
    rule(targetX, targetY) {
        return false;
    }
}
class Slodier extends Chess {
    rule(targetX, targetY) {
        return true;
    }
    get name() {
        return '兵';
    }
}
class King extends Chess {
    constructor() {
        super(...arguments);
        this.name = '帅';
    }
    rule(targetX, targetY) {
        return true;
    }
}
const h = new Horse();
const p = new Pao();
const s = new Slodier();
const k = new King();
h.move(1, 2);
p.move(1, 2);
s.move(1, 2);
k.move(1, 2);
