import { type } from "os";
import { TupleType } from "typescript";

function add(a:number, b:number) {
    return a + b;
}

let num = add(3, 4);

let name = 'yangguanghe';

let any;

function isOdd(n: number) {
    return n % 2 === 0
}

let nums: number[] = [2, 3, 4]

let arr:Array<number> = [1, 2, 3]

function printValues(obj: object) {
    const val = Object.values(obj);
    val.forEach(v => {
        console.log(v)
    })
}

printValues({
    name: 'yang',
    age: 18
})

// let nodata:string = null

let data: string | undefined;

if (typeof(data) === 'string') {
    console.log(data.length);
}

function getName() {
    console.log('yang');
}

function throwError(msg: string):never {
    throw new Error(msg);
}

function always():never {
    while(true) {
        //...
    }
}

let a:"A";

let gender: "man"|"woman"

let user: {
    name: string
    age: number
}

user = {
    name: 'yang',
    age: 18
}

let tu: [string, number]
tu = ['3', 4]

let b:any = 'string'
let c:number = b

type Gender = "man"|"woman"
type User = {
    name: string
    age: number
    gender: Gender
}

let u:User

u = {
    name: 'yang',
    age: 18,
    gender: 'man'
}

function getUser(g: Gender):User[] {
    return []
} 
getUser('man')

/**
 * 得到a*b的结果
 * @param a 
 * @param b 
 */
function combine(a:number, b:number):number;
/**
 * 得到a和b的拼接
 * @param a 
 * @param b 
 */
function combine(a:string, b:string):string;
function combine(a: number | string, b: number | string):number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    } else if (typeof a === 'string' && typeof b === "string") {
        return a + b;
    }
    throw new Error("a和b类型必须相同")
}

combine(2,3)

function sum(a:number, b:number = 1, c?:number) {
    if (c) {
        return a + b + c
    } else {
        return a + b
    }
}
sum(1)