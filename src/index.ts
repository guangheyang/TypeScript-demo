interface User {
    name: string
    age: number
    sayHello():void
    getName: () => void
}

let u:User = {
    name: 'yang',
    age: 18,
    sayHello: () => {
        console.log('hello')
    },
    getName: () => {
        console.log('yang')
    }
}

// 普通方式
// function sum(numbers: number[], callback: (n: number) => boolean) {
//     numbers.forEach
// }
// 类型别名
// type Condition = (n :number) => boolean

// 接口
interface Condition {
    (n: number): boolean
}
function sum(numbers: number[], callback: Condition) {
    let s = 0;
    numbers.forEach(n => {
        if (callback(n)) {
            s += n
        }
    })
    return s;
}

const result = sum([1, 3, 5, 7, 9], n => n % 2 !== 0);
console.log(result);


interface A {
    T1: string
}

interface B {
    T2: number
}

interface C extends A, B {
    T3: boolean
}
let t:C = {
    T1: 'yang',
    T2 :18,
    T3: true
}

type D = {
    T1:string
}

type E = {
    T2: number
}
 type F = {
     T3: boolean
 } & D & E
