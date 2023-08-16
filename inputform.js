/*var firstname
var lastname
var numroom
var value*/

function inputform() {
    
    alert("1");


    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var numroom = document.getElementById("numroom").value;
    var value = document.getElementById("value").value;
    var inday = document.getElementById("inday").value;
    var outday = document.getElementById("outday").value;
    var folionum = document.getElementById("folionum").value;
    var telnum = document.getElementById("telnum").value;
    var deposit = document.getElementById("deposit").value;





    //app.post("/creat" async (req,res)=>{
    //const {firstname, lastname, numroom, value, inday, outday, folionum, telnum, deposit} = req.body
    //})



    alert(firstname + "/" + lastname + "/" + numroom + "/" + value + "/" + inday + "/" + outday + "/" + folionum + "/" + telnum + "/" + deposit)
    /*db.query('INSERT INTO checkin SET ?', { firstname: firstname, lastname: lastname, numroom: numroom, value: value, inday: inday, outday: outday, folionum: folionum, telnum: telnum, deposit: deposit }, (error) => {
        if (error) {
            alert("การจองผิดพลาด!!!!!!");
        } else {
            alert("การจองสำเร็จ");
        }
    })*/
    
    
   
}


