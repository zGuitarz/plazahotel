var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kitamamai007",
  database: "dbplaza"
});

var firstname = 'pakaphon';
var folionum = '6611';

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  db.query('INSERT INTO checkin SET ?', { firstname: firstname, folionum: folionum })
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
