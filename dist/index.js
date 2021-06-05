function nameToUpperCase(obj) {
    obj.name = obj.name
        .split(' ')
        .map(n => n[0].toUpperCase() + n.substr(1))
        .join(" ");
    return obj;
}
const o = {
    name: 'guange yang',
    age: 18,
    gender: 'man'
};
console.log(nameToUpperCase(o));
