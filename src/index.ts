function take(arr: any[], n: number): any {
    if (n >= arr.length) {
        return arr
    }
    const newArr: any[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i])
    }
    return newArr;
}

const newArr = take([2,24,45,64,6,7], 2);

console.log(newArr)

function takes<T>(arr: T[], n: number): T[] {
    if (n >= arr.length) {
        return arr
    }
    const newArr: T[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i])
    }
    return newArr;
}

const newTake = takes<number>([1, 2, 5, 4, 6], 3);
console.log(newTake)