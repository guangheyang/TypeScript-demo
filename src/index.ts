interface Duck {
    sound: "嘎嘎嘎"
    swin(): void
}

// interface Person {
//     name: string
//     age: number
//     sound: string
//     swin(): void
// }

let person = {
    name: "伪装成鸭子的人",
    age: 12,
    sound: "嘎嘎嘎" as "嘎嘎嘎",
    swin() {
        console.log(this.name + "正在游泳，并发出" + this.sound + "的声音");
    }
}

let d:Duck = person

d.swin()

interface Condition {
    (n: number, index: number): boolean
}

function sum(numbers: number[], callback:Condition) {
    let s = 0;
    
    numbers.forEach((n, i) => {
        if (callback(n, i)) {
            s += n
        }
    })
    return s;
}

const result = sum([3, 4, 5, 7, 11], n => n % 2 !== 0);

console.log(result)