Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Monkey = exports.Tiger = exports.Lion = exports.Animal = void 0;
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`我是${this.name},今年${this.age}岁`);
    }
}
exports.Animal = Animal;
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.type = '狮子';
    }
    singleFire() {
        console.log(`${this.name}表演穿过一个火圈`);
    }
    doubleFire() {
        console.log(`${this.name}表演穿过两个火圈`);
    }
}
exports.Lion = Lion;
class Tiger extends Animal {
    constructor() {
        super(...arguments);
        this.type = '老虎';
    }
    singleFire() {
        console.log(`${this.name}表演穿过一个火圈`);
    }
    doubleFire() {
        console.log(`${this.name}表演穿过两个火圈`);
    }
}
exports.Tiger = Tiger;
class Monkey extends Animal {
    constructor() {
        super(...arguments);
        this.type = '猴子';
    }
    dumuqiao() {
        console.log(`${this.name}表演走独木桥`);
    }
    zougangsi() {
        console.log(`${this.name}表演走钢丝`);
    }
}
exports.Monkey = Monkey;
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.type = '狗';
    }
    singleFire() {
        console.log(`${this.name}表演穿过一个火圈`);
    }
    doubleFire() {
        console.log(`${this.name}表演穿过两个火圈`);
    }
    suanshuti() {
        console.log(`${this.name}表演做算术题`);
    }
    dance() {
        console.log(`${this.name}表演跳舞`);
    }
}
exports.Dog = Dog;
