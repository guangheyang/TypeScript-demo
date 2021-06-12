const dbutil = require('./dbutils');
console.log(dbutil)
function queryAllBlog() {
    const connection = dbutil.createConnection();
    console.log(connection, 'con')
    const querySql = 'select * from blogList';
    connection.connect();
    connection.query(querySql, function(error, result) {
        console.log(result, 'result')
        if(!error) {
            console.log(result);
            success(result);
        } else {
            throw new Error(error);
        }
        connection.end();
    })
}
module.exports = {
    queryAllBlog
}
