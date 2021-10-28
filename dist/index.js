class User {
}
const u1 = new User();
const u2 = u1;
const A = User;
function createUser(cls) {
    return new cls();
}
const u = createUser(User);
function printUserProp(obj, prop) {
    console.log(obj[prop]);
}
const u3 = {
    loginId: "123",
    loginPwd: "abc",
    age: 10
};
printUserProp(u3, 'age');
const u4 = {
    loginId: '1243',
    loginPwd: '1233',
    age: 12
};
const u5 = {
    title: '文章',
    date: new Date()
};
