## 基本类型约束

### 如何进行类型约束

仅需在 变量、函数的参数、函数的返回值位置加`:类型`

在很多场景中ts可以完成推导。

any表示任意类型，对该类型，不进行类型检查。

*小技巧*如何区分数字字符串和数字，关键看怎么读？

如果按照数字的方式朗读，则位数字；否则为字符串。

### 源代码和编译结果差异

```typescript
function add(a:number, b:number) {
    return a + b;
}
let num = add(3, 4);
let name = 'yang';
let any;
```

```javascript
function add(a, b) {
    return a + b;
}
let num = add(3, 4);
let name = 'yangguanghe';
let any;
```

### 基本类型

- number 数字

```typescript
let num:number = 12;
let age = 18;
```

- string 字符串

```typescript
let str:string = 'yang';
let name = 'yang';
```

- boolean 布尔

```typescript
function isOdd(n: number) {
  return n % 2 === 0
}
```

- Array 数组

```typescript
let nums: number[] = [2, 3, 4]
let arr:Array<number> = [1, 2, 3]
```

- object 对象

  约束性不强，只能约束其为对象，不能约束其属性

```typescript
function printValues(obj: object) {
    const val = Object.values(obj);
    val.forEach(v => {
        console.log(v)
    })
}
```

- null 和 undefined

```typescript
let nodata:string = null;
```

​		null和undefined是所有其他类型的子类型，它可以赋值给其他类型。会使类型检查失去意义，可以通过在配置文件添加`strictNullChecks:true`,来获得更严格的空类型检查，从此null和undefined只能赋值给自身。

### 其他类型

- 联合类型 多种类型任选

  配合类型保护进行判断

  类型保护：当对某个变量进行类型判断之后，在判断的语句块中可以确定它的确切类型。

- void类型 

  通常用于约束函数的返回值，表示该函数没有任何返回值

- never类型

  通常用于约束函数的返回值，表示该函数永远不可能结束，一般检测不到，需要自己手动添加。

- 字面量类型

  使用一个值进行约束

  ```typescript
  let a:"A";
  
  let gender: "man"|"woman"
  
  let user: {
      name: string
      age: number
  }
  
  user = {
      name: 'yang',
      age: 18
  }
  ```

- 元祖类型（Tuple）

  一个固定长度的数组，并且数组中每一项的类型确定

  ```typescript
  let tu: [string, number]
  tu = ['3', 4]
  ```

- any类型

  可以绕过类型检查，因此any类型可以赋值任意类型

  ```typescript
  let b:any = 'string'
  let c:number = b
  ```

  #### 类型别名

  对已知的一些类型定义名称

  type 类型名

  ```typescript
  type Gender = "man"|"woman"
  type User = {
      name: string
      age: number
      gender: Gender
  }
  
  let u:User
  
  u = {
      name: 'yang',
      age: 18,
      gender: 'man'
  }
  
  function getUser(g: Gender):User[] {
      return []
  } 
  getUser('man')
  ```

  #### 函数的相关约束

  函数重载：在函数实现之前，对函数调用的多种情况进行声明。

  可选参数：可以在参数后加？，表示该参数不用传递，可选参数不能在参数列表首位。

  默认赋值：参数后加等号。

  ```typescript
  /**
   * 得到a*b的结果
   * @param a 
   * @param b 
   */
  function combine(a:number, b:number):number;
  /**
   * 得到a和b的拼接
   * @param a 
   * @param b 
   */
  function combine(a:string, b:string):string;
  function combine(a: number | string, b: number | string):number | string {
      if (typeof a === "number" && typeof b === "number") {
          return a * b;
      } else if (typeof a === 'string' && typeof b === "string") {
          return a + b;
      }
      throw new Error("a和b类型必须相同")
  }
  
  combine(2,3)
  
  function sum(a:number, b:number = 1, c?:number) {
      if (c) {
          return a + b + c
      } else {
          return a + b
      }
  }
  sum(1)
  ```