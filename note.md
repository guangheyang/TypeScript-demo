TS中预设的类型演算

`Partial<T>`  将类型T的成员变为可选

`Requried<T>` 将类型T中的成员变为必选
内部使用 -? 使成员去除可选

`Readonly<T>` 将类型T的成员变为只读

`Exclude<T, U>` 从T中剔除可以赋值给U的类型

`Extract<T, U>` 提取T中可以赋值给U的类型

`NonNullable<T>` 从T中剔除null和undefined

`ReturnType<T>` 获取函数返回值类型

infer推断类型

`InstanceType<T>` 获取构造函数类型的实例类型

