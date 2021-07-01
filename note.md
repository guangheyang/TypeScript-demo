## 在`JS`中this指向的几种情况

明确：大部分情况，this的指向取决于函数的调用方式。

如果直接调用函数（全局调用），this指向全局对象或undefined（启用严格模式）

如果使用**对象.方法**调用，this指向对象本身

如果时`dom`事件的处理函数，this指向事件处理对象

特殊情况

箭头函数，this在函数声明是确定指向，指向函数位置的this

使用bind、apply、call手动绑定this对象

## TS中的this

配置`"noImplicitThis": true` , 表示不允许this隐式指向any

在TS中，允许在书写函数时，手动声明该函数中this的指向，将this作为函数的第一个参数，该参数只用于约束this，并不是真正的参数，也不会出现在编译结果中。