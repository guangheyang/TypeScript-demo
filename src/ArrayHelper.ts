// // 数组帮助类
// export class ArrayHelper {
//     // 实现获取数组的前n位
//     take<T>(arr: T[], n :number): T[] {
//         if (n >= arr.length) {
//             return arr
//         }
//         const newArr: T[] = [];
//         for (let i = 0; i < n; i++) {
//             newArr.push(arr[i]);
//         }
//         return newArr
//     }
//     // 打乱顺序
//     shuffle<T>(arr: T[]) {
//         const len = arr.length
//         for(let i = 0; i < len; i++) {
//             const targetIndex = this.getRandom(0, len)
//             const temp = arr[i]
//             arr[i] = arr[targetIndex]
//             arr[targetIndex] = temp
//         }
//     }
//     private getRandom(min: number, max: number) {
//         const dec = max - min;
//         return Math.floor(Math.random() * dec + max);
//     }
// }
export class ArrayHelper<T> {
    constructor(private arr: T[]) {}
    private len = this.arr.length;
    // 实现获取数组的前n位
    take(n :number): T[] {
        if (n >= this.arr.length) {
            return this.arr
        }
        const newArr: T[] = [];
        for (let i = 0; i < n; i++) {
            newArr.push(this.arr[i]);
        }
        return newArr
    }
    // 打乱顺序
    shuffle() {
        console.log(this.len, 'len')
        for(let i = 0; i < this.len; i++) {
            const targetIndex = this.getRandom(0, this.len)
            const temp = this.arr[i];
            console.log(targetIndex, 'targetIndex')
            this.arr[i] = this.arr[targetIndex];
            this.arr[targetIndex] = temp;
        }
        console.log(this.arr, 'over')
    }
    // 打印数组
    print() {
        for(let i = 0; i < this.len; i++) {
           console.log(this.arr[i])
        }
    }
    // 获取随机索引
    private getRandom(min: number, max: number) {
        const dec = max - min;
        return Math.floor(Math.random() * dec + min);
    }
}