Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayHelper = void 0;
class ArrayHelper {
    constructor(arr) {
        this.arr = arr;
        this.len = this.arr.length;
    }
    take(n) {
        if (n >= this.arr.length) {
            return this.arr;
        }
        const newArr = [];
        for (let i = 0; i < n; i++) {
            newArr.push(this.arr[i]);
        }
        return newArr;
    }
    shuffle() {
        console.log(this.len, 'len');
        for (let i = 0; i < this.len; i++) {
            const targetIndex = this.getRandom(0, this.len);
            const temp = this.arr[i];
            console.log(targetIndex, 'targetIndex');
            this.arr[i] = this.arr[targetIndex];
            this.arr[targetIndex] = temp;
        }
        console.log(this.arr, 'over');
    }
    print() {
        for (let i = 0; i < this.len; i++) {
            console.log(this.arr[i]);
        }
    }
    getRandom(min, max) {
        const dec = max - min;
        return Math.floor(Math.random() * dec + min);
    }
}
exports.ArrayHelper = ArrayHelper;
