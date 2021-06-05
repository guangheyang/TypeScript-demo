interface hasNameProperty {
    name: string
}

/*
* 将某个对象的name属性的每个单词首字母大写并返回该对象
*/
function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
    obj.name = obj.name
        .split(' ')
        .map(n => n[0].toUpperCase() + n.substr(1))
        .join(" ")
    return obj
}

const o = {
    name: 'guange yang',
    age: 18,
    gender: 'man'
}

console.log(nameToUpperCase(o))