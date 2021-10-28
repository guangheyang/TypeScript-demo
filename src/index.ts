// 参数装饰器
class MyMath{
  sum(a: number, @t b: number) {
    return a + b;
  }
}

function t(target: any, method: string, index: number) {
  console.log(target, method, index)
}

// 关于TS自动注入的元数据
import "reflect-metadata"
class User {
  @Reflect.metadata('a', 'b')
  loginId: string
  @Reflect.metadata('a', 'b')
  age: number
}

// AOP
class RegUser {
  loginId: string
  loginPwd: string
  age: number
  pid: string
  email: string
  /**
   * 将用户保存到数据库
   */
  save() {
    // 验证处理

    // 通过加入数据库
  }
}