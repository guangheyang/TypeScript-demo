import 'reflect-metadata';
import { IsNotEmpty, Max, MaxLength, Min, MinLength, validate } from 'class-validator'
import { plainToClass, Type } from 'class-transformer'
import axios from 'axios';
class RegUser {
  @IsNotEmpty({ message: '账户不能为空' })
  @MinLength(5, { message: '账户必须至少5个字符' })
  @MaxLength(12, { message: '账户最多12个字符' })
  loginId: string
  @IsNotEmpty()
  loginPwd: string
  @Min(100, { message: '年龄最小为0' })
  @Max(100, { message: '年龄最小为100' })
  age: number
  gender: '男' | '女'
}

const post = new RegUser()
post.loginId = '1234'
post.loginPwd = 'abc'
post.age = -1
validate(post).then(res => {
  console.log(res)
})


class User {
  id: number
  firstName: string
  lastName: string
  @Type(() => Number)
  age: number
  getName() {
    return this.firstName + '' + this.lastName
  }
  isAdult() {
    return this.age > 36 && this.age < 60
  }
}

axios.get('https://api.myjson.com/bins/rwr9w').then(res => res.data).then((users: User[]) => {
  for (const u of users) {
    const user = plainToClass(User, u)
    console.log(user.getName(), user.isAdult())
  }
})