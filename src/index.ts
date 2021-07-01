const u:IUser = {
    name: 'yang',
    age: 18,
    sayHello() {
        console.log(this.name, this.age, this)
    }
}

// const say = u.sayHello
// say()

class User {
    constructor(
        public name: string,
        public age: number
    ) {}
    sayHello(this: User) {
        console.log(this, this.name, this.age)
    }
}

const U = new User('yang', 18)
// 未约束时，这种调用方式就存在报错
// const Say = U.sayHello
// Say()
U.sayHello()


interface IUser {
    name: string,
    age: number,
    sayHello(this: IUser): void
}
// function hello() {
//     console.log(this, this.name, this.age)
// }