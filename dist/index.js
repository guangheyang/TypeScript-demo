const u = {
    name: 'yang',
    age: 18,
    sayHello() {
        console.log(this.name, this.age, this);
    }
};
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(this, this.name, this.age);
    }
}
const U = new User('yang', 18);
U.sayHello();
