import { ArrayHelper } from "./ArrayHelper";

type callback = (n :number, i: number) => boolean;
// 使用类型别名
type callbacType<T> = (n: T, i: number) => boolean;

function filterType<T>(arr: T[], callback: callbacType<T>): T[] {
    const newArr: T[] = [];
    arr.forEach((n, i) => {
        if (callback(n, i)) {
            newArr.push(n)
        }
    })
    return newArr;
}

const arr = [3, 5, 2, 9, 5, 6]

console.log(filterType(arr, n => n % 2 !== 0))

// 使用接口
interface callbackInterface<T> {
    (n: T, i: number): boolean
}

function filterInterface<T>(arr: T[], callback: callbackInterface<T>): T[] {
    const newArr: T[] = [];
    arr.forEach((n, i) => {
        if (callback(n, i)) {
            newArr.push(n)
        }
    })
    return newArr;
}

console.log(filterInterface(arr, n => n % 2 === 0));

const helper = new ArrayHelper<number>([3, 5, 2, 9, 5, 6])

// helper.take(3);
// helper.print();
helper.shuffle();
helper.print()