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

exports.show_user = async function (req, res) {
    var query = 'select * from user where user_id=1';
    await connection.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log('Error!');
        }
    });
};

exports.show_posts = async function (req, res) {
    var query = 'select * from post';
    await connection.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log('Error!');
        }
    });
};

exports.update_users = async function (req, res) {
    var query = "UPDATE user SET user_address=?, user_age=?, user_photo=? WHERE user_id=1";
    var address=req.body.address;
    var age=req.body.age;
    var photo=req.body.photo;
    await connection.query(query,[address,age,photo], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log('Error!');
        }
    });
};

exports.add_user = async function (req, res) {
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
    var query = "insert into post(post_content,game_id)values(?,?)";
    var content = req.body.post_content;
    var game_id=req.body.game_id;
    await connection.query(query, [content,game_id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log('Error!');
        }
    })
};

exports.main_data = async function (req, res) {
    var query = 'SELECT *, GROUP_CONCAT(comment_content) as comments, comment.*, game.* FROM post LEFT JOIN comment ON comment.post_id=post.post_id LEFT JOIN game ON game.game_id=post.game_id GROUP BY post.post_id ORDER BY post.post_id';
    await connection.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log('Error!');
        }
    });
};

exports.show_games = async function (req, res) {
    var query = 'select * from game';
    await connection.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log('Error!');
        }
    });
};

exports.add_game = async function (req, res) {
    var query = 'insert into game(game_name,game_photo)values(?,?)';
    var name=req.body.game_name;
    var photo=req.body.game_photo;
    await connection.query(query,[name,photo],(err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log('Error!');
        }
    });
};

exports.show_comment = async function (req, res) {
    var query = 'select * from comment';
    await connection.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log('Error!');
        }
    });
};

exports.add_comment = async function (req, res) {
    var query = 'insert into comment(comment_content,user_id,post_id) values (?,?,?)';
    var comment = req.body.comment_content;
    var user = req.body.user_id;
    var post = req.params.post_id;
    await connection.query(query, [comment, user, post], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("Error!");
        }
    })
};

exports.like = async function(req, res) {
    var query = "UPDATE post SET post_like=post_like+1 where post_id=?";
    var post = req.body.post_id;
    await connection.query(query,post, (err, rows, fields)=> {
        if (!err){
            res.send(rows);
        } else {
            console.log("Error!");
        }
    })
};

// Delete
exports.delete_user = async function(req, res) {
    var query = "delete * from user where user_id=?";
    var user = req.body.user_id;
    await connection.query(query,user, (err, rows, fields)=> {
        if (!err){
            res.send(rows);
        } else {
            console.log("Error!");
        }
    })
};

exports.delete_comment = async function(req, res) {
    var query = "delete * from comment where comment_id=?";
    var user = req.body.comment_id;
    await connection.query(query,user, (err, rows, fields)=> {
        if (!err){
            res.send(rows);
        } else {
            console.log("Error!");
        }
    })
};

exports.delete_post = async function(req, res) {
    var query = "delete from post where post_id=?";
    var user = req.body.post_id;
    await connection.query(query,user, (err, rows, fields)=> {
        if (!err){
            res.send(rows);
        } else {
            console.log("Error!");
        }
    })
};