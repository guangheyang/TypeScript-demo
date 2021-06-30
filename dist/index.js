const obj = {
    name: 'asdf',
    age: 12,
    'my-pid': '131424'
};
const methodsFun = 'sayhello';
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    [methodsFun]() {
        console.log('1');
    }
}
const u = new User('yang', 18);
u[methodsFun]();
console.log(u["pid"]);
class MyArray {
    constructor() {
        this[0] = 1;
        this[1] = 'a';
        this[2] = 'yang';
    }
}
const myArr = new MyArray();
console.log(myArr[0]);
console.log(myArr[6] = 12);
const arr = [];
arr[0] = 1;
arr["0"] = 3;
console.log(arr[0]);
