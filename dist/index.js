let person = {
    name: "伪装成鸭子的人",
    age: 12,
    sound: "嘎嘎嘎",
    swin() {
        console.log(this.name + "正在游泳，并发出" + this.sound + "的声音");
    }
};
let d = person;
d.swin();
function sum(numbers, callback) {
    let s = 0;
    numbers.forEach((n, i) => {
        if (callback(n, i)) {
            s += n;
        }
    });
    return s;
}
const result = sum([3, 4, 5, 7, 11], n => n % 2 !== 0);
console.log(result);
