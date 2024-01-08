function validate(){
    var username = document.getElementById("fname")
    var password = document.getElementById("email")

    if(username.value == "" ||password.value=="")
    {
        alert("No blank values allowed");return false
    }
    else{
        true;
    }
}