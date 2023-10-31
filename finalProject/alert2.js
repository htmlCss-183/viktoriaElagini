function validate(){
    var username = document.getElementById("uname")
    var password = document.getElementById("pass")

    if(username.value == "" ||password.value=="")
    {
        alert("No blank values allowed");return false
    }
    else{
        true;
    }
}
    