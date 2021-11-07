## 声明文件

概述、编写、发布

## 概述

1.什么是声明文件？

以`.d.ts`结尾的文件

2.声明文件有什么作用？

TS读取`JS`时，得不到类型声明，作用为`JS`代码提供类型声明

3.声明文件存放位置

- 放置在`tsconfig.json`配置中包含的目录中
- 放置在node_modules/@types文件夹中
- 手动配置,`tsconfig.json`中添加`typeRoots`文件目录，添加后上面的配置失效
- 与`JS`代码所在目录相同，并且文件名也相同的文件，实际是用TS代码书写的工程发布之后的格式。

## 编写

手动编写、自动生成

### 自动生成

工程是使用TS开发的，发布（编译）之后是`JS`文件

如果发布的文件，需要其他开发者使用，可以使用声明文件，来描述发布结果中的类型。

配置`tsconfig.json`中的declaration: true即可

`sourceMap`开启源码地图

### 手动编写

1. 对已有的库，它是使用`JS`书写而成，并且更改该库的代码为TS成本较高。
2. 对一些第三方库，它们使用`JS`是写而成，并且这些第三方库没有提供声明文件，这种情况较少。

#### 全局声明

`declare`声明一些全局的对象、属性、变量

#### 命名空间

`namespace`表示命名空间，可以将其认为是一个对象，命名空间的内容，*必须通过命名空间.成员名*的方式访问。

#### 模块声明

使用`module`和`export`配合使用

```typescript
declare module "lodash" {
  export function chunk<T>(array: T[], size:number): T[][]
}
```

#### 三斜线指令

在一个声明文件中，包含另一个声明文件。

```typescript
/// <reference path="../../index.d.ts" />
```

## 发布

1.当前工程使用TS开发

编译完成后，将编译结果所在文件夹直接发布到`npm`上即可

2.为其他第三方开发的声明文件

发布到@type/**中

- [ ] 进入`gitHub`中的开源项目[https://github.com/DefinitelyTyped/DefinitelyTyped](gitHub中的开源项目)
- [ ] fork到自己的开源库中
- [ ] 从自己的开源库中克隆到本地
- [ ] 本地新建分支（例如：`mylodash4.3`）,在新分支中的types目录中新建文件夹，在新的文件夹中开发
- [ ] push分支到你的开源库
- [ ] 到官方的开源库中，提交pull request
- [ ] 等待官方审核（1天），审核通过会将你的分支代码合并到主分支，然后发布到`npm`

之后就可以通过`npm install @types/你发布的库名`

