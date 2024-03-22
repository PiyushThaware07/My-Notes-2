const mysql = require("mysql");
const new_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',         // <---- username
    password: '',         // <---- default password of mysql
    database: 'employee'  // <---- Database name
});
new_connection.connect((error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Connected To MySQL");
    }
})

module.exports = new_connection;