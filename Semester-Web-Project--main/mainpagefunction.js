window.addEventListener("load", addEventListener);

function addEventListener() {
    Logincheck()
}

function Logincheck() 
{
    var isloggedin = localStorage.getItem("isloggedin");
    if (isloggedin == true)
    {
        document.getElementById("profilebutton").setAttribute("href", "profile.html");
    }
    
}