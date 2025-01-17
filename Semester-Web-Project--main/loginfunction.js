window.addEventListener("load", EventListener);

function EventListener() 
{
    console.log("hello");
    document.getElementById("btnlogin").addEventListener("click", Login);
}

function Login()
{
    var lgnusername = document.getElementById("loginusername").value;
    var lgnpassword = document.getElementById("loginpassword").value;
    var storedprofile = localStorage.getItem(lgnusername);
    if (lgnusername == "" || lgnpassword == "")
    {
        alert("Please enter all the details.");
    }
    else if (storedprofile== null)
    {
        alert("Account does not exist");
    }
    else
    {
        storedprofile = JSON.parse(storedprofile);
        var password = storedprofile[0];
        console.log(storedprofile);
        if (lgnpassword === password)
        {
            alert("Login successful");
            localStorage.setItem("isloggedin", true);
            window.location.href = "profile.html";
        }
        else
        {
            alert("Incorrect password");
        }
    }
}