interface User {
    readonly id: string
    name: string
    age: number
    readonly arr: readonly string[] // 本身不能赋值，数组也不能改变
}

let u:User = {
    id: '123',
    name: 'yang',
    age: 18,
    arr: ['yang']
}

// u.id = '234' 会报错

// 只读的数组
let arr: readonly number[] = [2, 3, 4]
let arrs: ReadonlyArray<number> = [2, 3, 4]

arr = [4, 5, 6, 7];

console.log(arr, arrs)

