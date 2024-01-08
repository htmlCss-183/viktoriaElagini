function burgerMenuHandler(){
    var navlinks = document.getElementById("navLinks");

    if(navlinks.style.display === "none"){
        navlinks.style.display = "block";
    } else {
        navlinks.style.display = "none";
    }
};