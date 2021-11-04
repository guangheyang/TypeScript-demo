import { type } from "os";

interface User {
  age: number
  name: string
}

let u1: Partial<User>;

u1 = {
  name: 'yang'
}

let u2: Required<User>;

u2 = {
  name: 'yang',
  age: 18
}

let u3: Readonly<User>

u3 = {
  name: 'yang',
  age: 18
}

// 报错
// u3.age = 20

let u4: Exclude<"a" | "b" | "c" | "d", "a" |"c">

u4 = 'd'

type T = "男" | "女" | null | undefined

type NEWT = Exclude<T, null | undefined>



let u5: Extract<"a" | "b" | "c" | "d", "a" |"c">

u5 = 'c'


type str = string | null | undefined
let u6: NonNullable<str>

type func = () => number
type returnType = ReturnType<func>


function sum(a: number, b: number) {
  return a + b
}

let s: ReturnType<typeof sum>


class Person {
  loginId: string
}
let p1: InstanceType<typeof Person>

type twoParamsConstructor = new (arg1: any, arg2: any) => Person

const a: twoParamsConstructor = class Test extends Person {
  constructor(a: any, b:any) {
    super()
  }
}

type Inst = InstanceType<twoParamsConstructor>