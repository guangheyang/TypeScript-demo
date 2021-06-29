class User {
    constructor (
        public loginId: string,
        public loginPwd: string,
        public name: string,
        public age: number
    ) {
        // 需要将新建的用户加入到数组中
        User.users.push(this)
    }
    static login(loginId: string, loginPwd: string): User | undefined {
        return this.users.find(u => u.loginId === loginId && u.loginPwd === loginPwd)
    }

    static users: User[] = []
    sayHello() {
        console.log(`大家好，我叫${this.name}, 今年${this.age}岁`);
    }
}

const u = User.login('XXX', 'xxx');

const u1 = new User('u1', 'pwd', 'yang', 18);
const u2 = new User('u2', 'pwd', 'qq', 16);
const u3 = new User('u3', 'pwd', 'jiege', 21);
// u1.sayHello()
// u2.sayHello()
// u3.sayHello()

console.log(User.users)

// const result = User.login('u1', 'pwd')
const result = User.login('u1', 'pwd1')
console.log(result)
if (result) {
    result.sayHello()
} else {
    console.log('登陆失败')
}


class Board {
    width: number = 500
    height: number = 700
    init() {
        console.log('初始化棋盘')
    }

    // 私有化构造函数，外面不能使用new
    private constructor() {}

    private static _board?: Board;

    static readonly singleBoard: Board = new Board();
    static createBoard() :Board {
        if (this._board) {
            return this._board;
        }
        this._board = new Board();
        return this._board;
    }
}

const b1 = Board.createBoard()
const b2 = Board.createBoard()
const b3 = Board.singleBoard
const b4 = Board.singleBoard
console.log(b1 === b2)
console.log(b3 === b4)