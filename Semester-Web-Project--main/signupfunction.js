window.addEventListener("load", EventListener);

function EventListener() 
{
    console.log("hello");
    document.getElementById("btncreateaccount").addEventListener("click", accountCreation);
}

function accountCreation()
{

    num= 1;
    var username = document.getElementById("signupusername").value;
    var email = document.getElementById("signupemail").value;
    var password = document.getElementById("signuppassword").value;
    
    if (username == "" || email == "" || password == "")
    {
        alert("Please enter all the details.");
    }
    else
    {
        list = [password, email]
        alert("Account created successfully");
        localStorage.setItem(username,JSON.stringify(list));
        num++;
        window.location.href = "login.html";
    }
    
}

