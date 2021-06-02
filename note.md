### 泛型

有时书写某个函数时，会丢失一些类型信息（多个位置的类型应该保持一致或有关联的信息）

泛型：是指附属于函数、类、接口、类型别名之上的类型

泛型相当于是一个类型变量，在定义时，无法预先知道具体类型，可以使用该变量代替，只要在调用时才能确定它的类型。

很多时候，TS会智能的根据传递的参数，推导出泛型的具体类型

如果无法完成推到，并且有没有传递具体的类型，默认为空对象

#### 在函数中使用泛型

在函数名之后加上`<泛型名称>`

未使用泛型

```typescript
function take(arr: any[], n: number): any {
    if (n >= arr.length) {
        return arr
    }
    const newArr: any[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i])
    }
    return newArr;
}

const newArr = take([2,24,45,64,6,7], 2);

console.log(newArr)
```

使用泛型

```typescript
// T = string,设置默认值为string
function take<T = string>(arr: T[], n: number): T[] {
    if (n >= arr.length) {
        return arr
    }
    const newArr: T[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i])
    }
    return newArr;
}

const newArr = takes<number>([1, 2, 5, 4, 6], 3);
console.log(newArr)
```

#### 在类中使用泛型

在类名之后加上`<泛型名称>`

#### 在接口中使用泛型

在接口名之后加上`<泛型名称>`

#### 在类型别名中使用泛型

在类型别名之后加上`<泛型名称>`

未使用泛型

```typescript
type callback = (n :number, i: number) => boolean;
```

使用泛型

```typescript
type callback<T> = (n :T, i: number) => boolean;
```

