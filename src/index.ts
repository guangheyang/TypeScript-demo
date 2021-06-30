import { Animal, Dog, Lion, Monkey, Tiger } from "./animals";
import { IFireShow, IWisdomShow } from "./interfaces";

const animals: Animal[] = [
    new Lion('小石',12),
    new Tiger('小虎',11),
    new Monkey('小猴',13),
    new Dog('小狗',14)
]

// 1.所有动物打招呼
animals.forEach(a => {a.sayHello()})

// 2.可以钻火圈的动物开始表演

// 类型保护函数
function hasFireShow(ani: object): ani is IFireShow {
    if ((ani as IFireShow).singleFire && (ani as unknown as IFireShow).doubleFire) {
        return true
    }
    return false
}
// animals.forEach(a => {
//     if (a instanceof Lion || a instanceof Tiger) {
//         a.singleFire()
//         a.doubleFire()
//     }
// })
animals.forEach(a => {
    if (hasFireShow(a)) {
        a.singleFire()
        a.doubleFire()
    }
})

// 3.所有会智慧表演的动物表演
function hasWisdomShow(ani: any): ani is IWisdomShow {
    if ((ani as IWisdomShow).dance && (ani as IWisdomShow).suanshuti) {
        return true
    }
    return false
}
animals.forEach(a => {
    if (hasWisdomShow(a)) {
        a.dance()
        a.suanshuti()
    }
})

// 接口继承类
class A {
    a1: string = ''
    a2: string = ''
    a3: string = ''
}

class B {
    b1: number = 0
    b2: number = 0
    b3: number = 0
}

interface C extends A, B {}

const c: C = {
    a1: 'a1',
    a2: 'a2',
    a3: 'a3',
    b1: 1,
    b2: 2,
    b3: 3
}