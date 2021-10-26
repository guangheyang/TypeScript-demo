function d() {  // 装饰器工厂
  return function (target: any, key: string) {
    console.log(target, key)
    if (!target.__props) {
      target.__props = []
    }
    target.__props.push(key)
  }
}

class A{
  @d()
  prop1: string
  @d()
  static prop2: string
}

const a = new A();
// console.log((a as any).__props)

function enumerable (target:any, key:string, descriptor: PropertyDescriptor) {
  // console.log(target, key, descriptor)
  descriptor.enumerable = true
}

function useless(target:any, key:string, descriptor: PropertyDescriptor) {
  descriptor.value = function () {
    console.warn(key + '该方法已过期')
  }
}

class B {
  @enumerable
  methods1() {
    
  }
  @useless
  @enumerable
  methods2() {
    
  }
}
const b = new B()
for(var key in b) {
  console.log(key, 'b')
}
b.methods2()