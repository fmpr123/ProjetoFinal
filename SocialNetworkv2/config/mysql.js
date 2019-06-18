// MYSQL SETUP

const
  mysql = require('mysql'),
  hl = require('handy-log')

// CREATES A DB CONNECTION
const db = mysql.createConnection({
  host:     8080,
  user:     "root",
  password: "",
  database: "qwerty",
  charset:  'utf8mb4'
})

// CONNECTS DB
db.connect(err => {
  if(err){
    hl.error(err)
  }
})

module.exports = db
