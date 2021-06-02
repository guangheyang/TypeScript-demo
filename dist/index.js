function take(arr, n) {
    if (n >= arr.length) {
        return arr;
    }
    const newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
const newArr = take([2, 24, 45, 64, 6, 7], 2);
console.log(newArr);
function takes(arr, n) {
    if (n >= arr.length) {
        return arr;
    }
    const newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
const newTake = takes([1, 2, 5, 4, 6], 3);
console.log(newTake);
