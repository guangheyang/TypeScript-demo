import "reflect-metadata";
const key = Symbol.for('descriptor')
export function descriptor(descriptor: string) {
  return Reflect.metadata(key, descriptor)
}
export function printObj(obj: any) {
  const cons = Object.getPrototypeOf(obj)
  // 输出类的名称
  if (Reflect.hasMetadata(key, cons)) {
    console.log(Reflect.getMetadata(key, cons))
  } else {
    console.log(cons.constructor.name)
  }
  // 输出所有的属性描述和属性值
  for (const prop in obj) {
    if (Reflect.hasMetadata(key, obj, prop)) {
      console.log(`\t${Reflect.getMetadata(key, obj, prop)}: ${obj[prop]}`)
    } else {
      console.log(`\t${prop}: ${obj[key]}`)
    }
  }
}