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

// exports.show_users=async function(req,res){
//     var query='select * from user';
//     await connection.query(query, (err, rows, fields)=> {
//         if(!err){
//             res.send(rows);
//         }else{
//             console.log('Error!');
//         }
//     });
// };