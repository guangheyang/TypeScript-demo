class User {
    readonly id: number // 不能改变
    gender: '男' | '女' = "男"
    pid?: string
    private _publishNumber: number = 3
    private _curNumber: number = 0

    constructor(name: string, private _age: number, gender: '男' | '女' = '男') {
        this.id = Math.random();
    }
    publish(title: string) {
        if (this._curNumber < this._publishNumber) {
            console.log('发布一篇文章' + title)
            this._curNumber++
        } else {
            console.log('你今日发布的文章数量以达到上限')
        }
    }

    set age(value: number) {
        if (value < 0) {
            this._age = 0
        } else if (value >= 200) {
            this._age = 200
        } else {
            this._age = value
        }
    }
    get age() {
        return Math.floor(this._age)
    }
}

const u = new User('yang', 18)

u.age = 1.8

console.log(u.age)
