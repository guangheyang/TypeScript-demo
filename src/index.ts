import { classDescriptor, printObj, propDescriptor } from "./Descriptor"

@classDescriptor('用户')
class User {
  @propDescriptor('账号')
  loginId: string
  @propDescriptor('密码')
  loginPwd: string
}

const u = new User();
u.loginId = '123'
u.loginPwd = 'abc'
printObj(u)

@classDescriptor('文章')
class Article {
  @propDescriptor('标题')
  title: string
  @propDescriptor('内容')
  content: string
  @propDescriptor('日期')
  date: Date
}

const a = new Article()
a.title = "打发发发"
a.content = 'afafafaf'
a.date = new Date()
printObj(a)
