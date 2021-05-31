### 属性

使用属性泪飙来描述类中的属性

#### 属性的初始化检查

```json
  "strictPropertyInitialization": true // 更加严格的属性初始化检查
```

#### 属性的初始化的位置

1. 构造函数中

2. 属性默认值

   ```typescript
   class User {
       name: string
       age: number
       gender: '男' | '女' = '男' // 属性默认值
   
       // 构造函数中
       constructor(name: string, age: number, gender: '男' | '女' = '男') {
           this.name = name;
           this.age = age;
       }
   }
   
   const u = new User('yang', 18)
   ```

#### 可选属性

属性可以修饰为可选的，不会有初始化要求。

#### 使用只读修饰符

可以修饰为只读的（`readonly`）。

#### 使用访问修饰符

访问修饰符可以控制类中的某个成员的访问权限。

- public：默认值的访问修饰符，公开的，所有代码均可访问
- private：私有的，只有在类中可以访问，不暴露给外面
- protected:  受保护的

#### 语法糖（属性简写）

如果某个属性，通过构造函数的参数传递，比起不做任何处理的赋值给该属性，可以进行简写。

```typescript
class User {
    age: number
    gender: '男' | '女' = '男' // 属性默认值

    // name在构造函数不进行任何操作可以简写成下面的示例
    constructor(public name: string, age: number, gender: '男' | '女' = '男') {
        this.age = age;
    }
}

const u = new User('yang', 18)
```

