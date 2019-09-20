const path = require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

var originsWhitelist = [
  'http://localhost:4200'
   
];

var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}

app.use(cors(corsOptions));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'leyend9713',
  database: 'test'
});

conn.connect((err) =>{
  if (err) throw err;
  var sql = "CREATE TABLE IF NOT EXISTS post (id Int NOT NULL PRIMARY KEY, title VARCHAR(255), description VARCHAR(255), image VARCHAR(255), create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)";
  conn.query(sql, function (err, result) {
    if (err) throw err;
  });
if(err) throw err;
});


app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 // todos los post
app.get('/posts',(req, res) => {
  let sql = "SELECT * FROM posts";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.json({ results: results })
  });
});
// para cuando consulto un post
app.get('/posts/id/:id',(req, res) => {
  let sql = "SELECT * FROM posts WHERE id ="+ req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.json({ results: results })
  });
});
///para la tabla latest
app.get('/posts/latest',(req, res) => {
  let sql = "SELECT created_at,title FROM posts limit 6";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.json({ results: results })
  });
});

 
//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});