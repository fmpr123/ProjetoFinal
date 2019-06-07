const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'socialnetwork'
});

connection.connect();

exports.show_users = async function (req, res) {
    var query = 'select * from user';
    await connection.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log('Error!');
        }
    });
};

exports.add_users = async function (req, res) {
    var query = "insert into user(user_name,user_email,user_password)values(?,?,?)";
    var name = req.body.user_name;
    var email = req.body.user_email;
    var password = req.body.user_password;
    await connection.query(query, [name, email, password], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log('Error!');
        }
    })
};

exports.login = async function (req, res) {
    var query = "select * from user where user_name=?";
    var name = req.body.user_name;
    var password = req.body.user_password;
    await connection.query(query, [name, password], (err, rows, fields) => {
        if (err) {
            throw err;
        } else if (!rows.length) {
            res.send("User not found!");
        } else if (!(rows[0].user_password == password)) {
            res.send("Invalid password!");
        } else {
            res.send(rows);
        }
    })
};

exports.add_post = async function (req, res) {
    var query = "insert into post(post_content, user_id)values(?,?)";
    var content = req.body.post_content;
    var user = req.body.user_id;
    await connection.query(query, [content,user], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log('Error!');
        }
    })
};

