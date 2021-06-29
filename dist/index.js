class User {
    constructor(loginId, loginPwd, name, age) {
        this.loginId = loginId;
        this.loginPwd = loginPwd;
        this.name = name;
        this.age = age;
        User.users.push(this);
    }
    static login(loginId, loginPwd) {
        return this.users.find(u => u.loginId === loginId && u.loginPwd === loginPwd);
    }
    sayHello() {
        console.log(`大家好，我叫${this.name}, 今年${this.age}岁`);
    }
}
User.users = [];
const u = User.login('XXX', 'xxx');
const u1 = new User('u1', 'pwd', 'yang', 18);
const u2 = new User('u2', 'pwd', 'qq', 16);
const u3 = new User('u3', 'pwd', 'jiege', 21);
console.log(User.users);
const result = User.login('u1', 'pwd1');
console.log(result);
if (result) {
    result.sayHello();
}
else {
    console.log('登陆失败');
}
class Board {
    constructor() {
        this.width = 500;
        this.height = 700;
    }
    init() {
        console.log('初始化棋盘');
    }
    static createBoard() {
        if (this._board) {
            return this._board;
        }
        this._board = new Board();
        return this._board;
    }
}
Board.singleBoard = new Board();
const b1 = Board.createBoard();
const b2 = Board.createBoard();
const b3 = Board.singleBoard;
const b4 = Board.singleBoard;
console.log(b1 === b2);
console.log(b3 === b4);
