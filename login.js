var falie = "1"
var listUser = [
    {
        username: "admin1",
        password: "plaza789"
    },
    {
        username: "admin2",
        password: "plaza789"
    },
    {
        username: "admin3",
        password: "plaza789"
    },
    {
        username: "admin4",
        password: "plaza789"
    }
]

function getInfo(){
    var userinput =document.getElementById("exampleInputEmail").value
    var passinput =document.getElementById("exampleInputPassword").value
    
    for (i=0 ; i< listUser.length; i++){
        
        if(userinput == listUser[i].username && passinput == listUser[i].password){
            window.location='home.html'
            falie = "0"
            break    
        }
    }
    if(falie == "1"){
        alert("รหัสของคุณผิดพลาด กรุณากรอกใหม่")
    }

}