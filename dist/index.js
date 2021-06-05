Object.defineProperty(exports, "__esModule", { value: true });
const dictionary_1 = require("./dictionary");
const dic = new dictionary_1.Dictionary();
dic.set("a", 1);
dic.set("b", 2);
dic.set("a", 12);
dic.forEach((k, v) => {
    console.log(`${k}: ${v}`);
});
console.log(dic.hasKey("c"));
dic.delete("a");
dic.forEach((k, v) => {
    console.log(`${k}: ${v}`);
});
console.log(dic.length);
