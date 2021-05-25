## 接口和类型兼容

### 扩展类型-接口

接口： interface

在ts中的接口：用于约束类、对象、函数的契约（标准）

契约（标准）的形式

- `API`文档，弱标准
- 代码约束，强标准

和类型别名一样，接口不出现在编译结果中。

使用上和类型别名几乎一样，主要区别在于约束类的时候，有所不同。

#### 接口约束对象

```typescript
interface User {
    name: string
    age: number
}

let u:User = {
    name: 'yang',
    age: 18
}
```

#### 接口约束方法

```typescript
interface User {
    name: string
    age: number
    sayHello():void // 第一种方式
    getName: () => void // 第二种方式
}

let u:User = {
    name: 'yang',
    age: 18,
    sayHello: () => {
        console.log('hello')
    },
    getName: () => {
        console.log('yang')
    }
}
```

#### 接口的特点

接口可以继承，继承之后子类可以使用父类所有成员，还可以表示逻辑含义，如`MyComponemt`组件时一个react组件。

```react
class MyComponemt extends React.Component {}
```

通过接口直接的继承，可以实现多种接口的组合。

```typescript
interface A {
    T1: string
}

interface B {
    T2: number
}

interface C extends A, B {
    T3: boolean
}
let t:C = {
    T1: 'yang',
    T2 :18,
    T3: true
}
```

使用类型别名可以实现类似效果，需要通过&（交叉类型）

交叉类型，结果包含两者的所有成员

```typescript
type D = {
    T1:string
}

type E = {
    T2: number
}
 type F = {
     T3: boolean
 } & D & E
```

