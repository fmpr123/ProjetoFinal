const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'socialnetwork'
});

connection.connect();

exports.show_users=async function(req,res){
    var query='select * from user';
    await connection.query(query, (err, rows, fields)=> {
        if(!err){
            res.send(rows);
        }else{
            console.log('Error!');
        }
    });
};

exports.add_users=async function(req,res){
    var query="insert into user(user_name,user_email,user_password)values(?,?,?)";
    var name=req.body.user_name;
    var email=req.body.user_email;
    var password=req.body.user_password;
    

    await connection.query(query,[name,email,password], (err, rows, fields)=> {
        if(!err){
            res.send(rows);
        }else{
            console.log('Error!');
        }
    });
};