import { descriptor, printObj } from "./Descriptor"

@descriptor('用户')
class User {
  @descriptor('账号')
  loginId: string
  @descriptor('密码')
  loginPwd: string
}

const u = new User();
u.loginId = '123'
u.loginPwd = 'abc'
printObj(u)

@descriptor('文章')
class Article {
  @descriptor('标题')
  title: string
  @descriptor('内容')
  content: string
  @descriptor('日期')
  date: Date
}

const a = new Article()
a.title = "打发发发"
a.content = 'afafafaf'
a.date = new Date()
printObj(a)

// import "reflect-metadata";

// @Reflect.metadata('A', '一个类')
// class A {
//   @Reflect.metadata('prop', '一个属性')
//   prop1: string
// }

// const obj = new A()
// console.log(Reflect.getMetadata('A', A))
// console.log(Reflect.getMetadata('prop', obj, 'prop1'))
