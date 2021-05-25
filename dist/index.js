let u = {
    name: 'yang',
    age: 18,
    sayHello: () => {
        console.log('hello');
    },
    getName: () => {
        console.log('yang');
    }
};
function sum(numbers, callback) {
    let s = 0;
    numbers.forEach(n => {
        if (callback(n)) {
            s += n;
        }
    });
    return s;
}
const result = sum([1, 3, 5, 7, 9], n => n % 2 !== 0);
console.log(result);
let t = {
    T1: 'yang',
    T2: 18,
    T3: true
};
