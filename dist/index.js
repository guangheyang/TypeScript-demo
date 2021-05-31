class User {
    constructor(name, age, gender = '男') {
        this.gender = "男";
        this.publishNumber = 3;
        this.curNumber = 0;
        this.id = Math.random();
        this.name = name;
        this.age = age;
    }
    publish(title) {
        if (this.curNumber < this.publishNumber) {
            console.log('发布一篇文章' + title);
            this.curNumber++;
        }
        else {
            console.log('你今日发布的文章数量以达到上限');
        }
    }
}
const u = new User('yang', 18);
u.publish('文章1');
u.publish('文章2');
u.publish('文章3');
u.publish('文章4');
