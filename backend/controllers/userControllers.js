const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'socialnetwork'
});

connection.connect();

exports.index=async function(req,res){
    var query='select * from user';
    await connection.query(query, (err, rows, fields)=> {
        console.log(rows);
        if(!err){
            res.send(rows);
        }else{
            console.log('Error!');
        }
    });
};

exports.index=async function(req,res){
    var query='select * from user';
    await connection.query(query, (err, rows, fields)=> {
        console.log(rows);
        if(!err){
            res.send(rows);
        }else{
            console.log('Error!');
        }
    });
};