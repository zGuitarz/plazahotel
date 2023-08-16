const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');


dotenv.config({path: './.env'});
const app = express();
const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})

db.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("MySQL Connect xxx");
    }
})
/*var firstname = "gg";
var lastname = "gg";
var numroom = 1234;
var value = 500;
var inday = "17-05-2004";
var outday = "17-05-2004";
var folionum = "12353";
var telnum = "6565656";
var deposit = 500;

db.query('INSERT INTO checkin SET ?', { firstname: firstname, lastname: lastname, numroom: numroom, value: value, inday: inday, outday: outday, folionum: folionum, telnum: telnum, deposit: deposit })*/

const publicDir =path.join(__dirname, './public');

app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('checkin');
})

app.listen(5002,()=>{
    console.log("server run port 5002");
})