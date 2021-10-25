// 概述
// class User {
//   @require
//   @range(3, 5)
//   @description('账号')
//   loginid: string; //描述：账号 验证规则： 1.必填 2.必须3-5个字符
//   loginpwd: string;
//   age: number;
//   gender: "男" | "女"
// }

// const u = new User();


// function validateUser(u: User) {
//   // 对用户对象中的数据进行验证
//   if (u.loginid && u.loginid.length <= 5 && u.loginid.length >= 3) {
//     // loginid验证通过
//   } else {
//     // 输出错误信息
//   }
// }

// 1

function d(target: new (...args: any[]) => object) {
  // console.log(target)
  // return class B {

  // }
}


@d
class A {
  // prop1:string // 提示错误，新的类可能会不存在这个属性
}
const a = new A()

// 2

function t(params: string) {
  return function(params: new(...args: any[]) => object) {

  } 
}
@t('a')
class B {

}

// 3

type constructor = new (...args: any[]) => object;

function d1(params:constructor) {
  console.log('d1')
}

function d2(params:constructor) {
  console.log('d2')
  
}

@d1
@d2
class C {

}

// 面试题

function d3() {
  console.log('d3')
  return function (params:constructor) {
    console.log('d3 decorator')
  }
}

function d4() {
  console.log('d4')
  return function (params:constructor) {
    console.log('d4 decorator')
  }
}

@d3()
@d4()
class D {

}