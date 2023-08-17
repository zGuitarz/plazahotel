var express = require('express');
var mysql = require('mysql');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(express.json());

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'kitamamai007',
    database:'dbplaza'
})

db.connect((err)=>{
    if(err){
        console.log('Error connecting to Mysql',err);
    }else{
        console.log('Mysql Connecting ');
    }
})

app.get('/', function(req,res){
    repone.sendFile(path.join(__dirname + '/checkin.html'));
});
 
/*app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));*/

//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json()); 
//route
app.post("/auth",async(req,res)=>{
    var {firstname, lastname, numroom, value, inday, outday, folionum, telnum, deposit} =req.body

    try{
        db.query(
            "INSERT INTO checkin(firstname, lastname, numroom, value, inday, outday, folionum, telnum, deposit) VALUES(?,?,?,?,?,?,?,?,?)",
            [firstname, lastname, numroom, value, inday, outday, folionum, telnum, deposit],
            (err, results, fields)=>{
                if(err){
                    console.log("error sql insert");
                    respone.redirect('/home');
                    return res.status(400).send();
                }
                return res.status(201).json({message: "add 1 row"});  
            }
        )
    }catch(err){
        console.log(err);
        return res.status(500).send();
    }
})


/*app.get('/home',function(res,req){
    response.send('welcome back,');
})*/

app.listen(3000, ()=> console.log("server is running on port 3000"));
