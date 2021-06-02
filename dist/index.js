Object.defineProperty(exports, "__esModule", { value: true });
const ArrayHelper_1 = require("./ArrayHelper");
function filterType(arr, callback) {
    const newArr = [];
    arr.forEach((n, i) => {
        if (callback(n, i)) {
            newArr.push(n);
        }
    });
    return newArr;
}
const arr = [3, 5, 2, 9, 5, 6];
console.log(filterType(arr, n => n % 2 !== 0));
function filterInterface(arr, callback) {
    const newArr = [];
    arr.forEach((n, i) => {
        if (callback(n, i)) {
            newArr.push(n);
        }
    });
    return newArr;
}
console.log(filterInterface(arr, n => n % 2 === 0));
const helper = new ArrayHelper_1.ArrayHelper([3, 5, 2, 9, 5, 6]);
helper.shuffle();
helper.print();
