const mysql = require('mysql');

function createConnection() {
    const connection = mysql.createConnection({
        host: 'yangguang.he.cn',
        port: "3306",
        user: "root",
        password: "Yangguang.he.cn.123",
        database: "blog"
    });
    return connection;
}
module.exports.createConnection = createConnection;
