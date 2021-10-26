export function classDescriptor(descriptor: string) {
  return function (target: Function) {
    // 保存到该类的原型中
    target.prototype.$classDescriptor = descriptor
  }
}

export function propDescriptor(descriptor: string) {
  return function (target: any, propName: string) {
    // 把所有的属性信息保存到该类的原型中
    if (!target.$propDescriptor) {
      target.$propDescriptor = []
    }
    target.$propDescriptor.push({
      propName,
      descriptor
    })
  }
}
export function printObj(obj: any) {
  // 输出类的名称
  if (obj.$classDescriptor) {
    console.log(obj.$classDescriptor)
  } else {
    console.log(Object.getPrototypeOf(obj).constructor.name)
    console.log(obj.__proto__.constructor.name)
  }
  // 输出所有的属性描述和属性值
  if (!obj.$propDescriptor) {
    obj.$propDescriptor = []
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // console.log(key)
      const prop = obj.$propDescriptor.find((p: any) => p.propName === key)
      if (prop) {
        console.log(`\t${prop.descriptor}: ${obj[key]}`)
      } else {
        console.log(`\t${key}: ${obj[key]}`)
      }
    }
  }
  // console.log(obj.$propDescriptor)
}