class User {
    readonly id: number // 不能改变
    name: string
    age: number
    gender: '男' | '女' = "男"
    pid?: string
    private publishNumber: number = 3
    private curNumber: number = 0

    constructor(name: string, age: number, gender: '男' | '女' = '男') {
        this.id = Math.random();
        this.name = name;
        this.age = age;
    }
    publish(title: string) {
        if (this.curNumber < this.publishNumber) {
            console.log('发布一篇文章' + title)
            this.curNumber++
        } else {
            console.log('你今日发布的文章数量以达到上限')
        }
    }
}

const u = new User('yang', 18)

u.publish('文章1')
u.publish('文章2')
u.publish('文章3')
u.publish('文章4')
