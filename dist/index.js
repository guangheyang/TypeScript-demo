Object.defineProperty(exports, "__esModule", { value: true });
const animals_1 = require("./animals");
const animals = [
    new animals_1.Lion('小石', 12),
    new animals_1.Tiger('小虎', 11),
    new animals_1.Monkey('小猴', 13),
    new animals_1.Dog('小狗', 14)
];
animals.forEach(a => { a.sayHello(); });
function hasFireShow(ani) {
    if (ani.singleFire && ani.doubleFire) {
        return true;
    }
    return false;
}
animals.forEach(a => {
    if (hasFireShow(a)) {
        a.singleFire();
        a.doubleFire();
    }
});
function hasWisdomShow(ani) {
    if (ani.dance && ani.suanshuti) {
        return true;
    }
    return false;
}
animals.forEach(a => {
    if (hasWisdomShow(a)) {
        a.dance();
        a.suanshuti();
    }
});
class A {
    constructor() {
        this.a1 = '';
        this.a2 = '';
        this.a3 = '';
    }
}
class B {
    constructor() {
        this.b1 = 0;
        this.b2 = 0;
        this.b3 = 0;
    }
}
const c = {
    a1: 'a1',
    a2: 'a2',
    a3: 'a3',
    b1: 1,
    b2: 2,
    b3: 3
};
