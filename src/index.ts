// typeof
class User {
  loginId: string
  loginPwd: string
}

const u1 = new User()
const u2 = u1;
const A = User;

// new() => USer
function createUser(cls: typeof User): User {
  return new cls()
}

const u = createUser(User)

// keyof
interface User1 {
  loginId: string
  loginPwd: string
  age: number
}

function printUserProp(obj:User, prop: keyof User1) {
  console.log(obj[prop])
}

const u3: User1 = {
  loginId: "123",
  loginPwd: "abc",
  age: 10
}

printUserProp(u3, 'age')

// in
type Obj = {
  // [p: string]: string
  // [p in 'loginId' | 'loginPwd' | 'age']: string 
  // [p in keyof User1]: string
  // [p in keyof User1]: User1[p]
  readonly [p in keyof User1]: User1[p]
}

const u4: Obj = {
  loginId: '1243',
  loginPwd: '1233',
  age: 12
}
// u4.age = '123'


type Article = {
  title: string
  date: Date
}

type Pratial<T> = {
  readonly [p in keyof T] ?: T[p]
}

const u5: Partial<Article> = {
  title: '文章',
  date: new Date()
}