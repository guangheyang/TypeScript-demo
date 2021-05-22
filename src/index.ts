import sum, { name } from "./module";
// 解决默认导入的错误,下面的写法会报错
// import fs from 'fs'

// 解决方式
// 第一种
import { readFileSync } from 'fs'
console.log(readFileSync('./'));
// 第二种
import * as fs from 'fs'
console.log(fs.readFileSync('./'));
// 第三种
// 更改配置

// TS中使用commonjs模块
import commonjs from './commonjs'
import myCommonjs = require('./commonjs');
console.log(myCommonjs.say, commonjs.name)
// console.log(name);
// console.log(sum(1, 2));
