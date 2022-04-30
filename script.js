var password = "tony1234";

function passCheck(){
    if(document.getElementById("pass1").value!= password) {
        alert("ACCESS DENIED!, TRY AGAIN :D");
        return false;
    }
    if(document.getElementById("pass1").value == password) {
        alert("ACCESS GRANTED, GREAT SUCCESS");
    } 

}
