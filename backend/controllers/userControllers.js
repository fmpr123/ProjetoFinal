const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'socialnetwork'
});

connection.connect();

exports.person_detail=async function(req,res){
    var query='select * from users';
    await connection.query(query, function (err, rows, fields) {
        if(!err){
            res.send(rows);
        }else{
            console.log('Error!');
        }
    });
};