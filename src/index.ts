const obj = {
    name: 'asdf',
    age: 12,
    'my-pid': '131424'
}
const methodsFun = 'sayhello'


// for (const key in obj) {
//     console.log(key, obj[key])
// }

class User {
    // 索引器
    // 可以这样写 [prop: string]: string | number | {():void}
    [prop: string]: any
    constructor(
        public name: string,
        public age: number
    ) {}
    [methodsFun]() {
        console.log('1')
    }
}
const u = new User('yang', 18)
u[methodsFun]()

console.log(u["pid"])

class MyArray {
    [prop: number]: any
    0 = 1
    1 = 'a'
    2 ='yang'
}

const myArr = new MyArray()
console.log(myArr[0])
console.log(myArr[6] = 12)


const arr: any[] = []
arr[0] = 1
arr["0"] = 3
console.log(arr[0])