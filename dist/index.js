"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
let num = add(3, 4);
let name = 'yangguanghe';
let any;
function isOdd(n) {
    return n % 2 === 0;
}
let nums = [2, 3, 4];
let arr = [1, 2, 3];
function printValues(obj) {
    const val = Object.values(obj);
    val.forEach(v => {
        console.log(v);
    });
}
printValues({
    name: 'yang',
    age: 18
});
// let nodata:string = null
let data;
if (typeof (data) === 'string') {
    console.log(data.length);
}
function getName() {
    console.log('yang');
}
function throwError(msg) {
    throw new Error(msg);
}
function always() {
    while (true) {
        //...
    }
}
let a;
let gender;
let user;
user = {
    name: 'yang',
    age: 18
};
let tu;
tu = ['3', 4];
let b = 'string';
let c = b;
let u;
u = {
    name: 'yang',
    age: 18,
    gender: 'man'
};
function getUser(g) {
    return [];
}
getUser('man');
