function login()
{
var username =
document.getElementById("username").value.trim();


var password =
    document.getElementById("password").value;


/* Default Admin Login */

if(username == "admin" && password == "1234")
{
    alert("Login Successful");

    window.location.href = "home.html";

    return;
}


/* Registered User Login */

var savedUsername =
    localStorage.getItem("registeredUsername");

var savedPassword =
    localStorage.getItem("registeredPassword");


if(
    username == savedUsername &&
    password == savedPassword &&
    savedUsername != null
)
{
    alert("Login Successful");

    window.location.href = "home.html";
}
else
{
    alert("Invalid Username or Password");
}


}

function searchFurniture()
{
var search =
document.getElementById("searchInput").value
.toLowerCase()
.trim();


if(search == "")
{
    alert("Please enter furniture name");
}

else if(search.includes("sofa"))
{
    window.location.href = "sofa.html";
}

else if(search.includes("chair"))
{
    window.location.href = "chair.html";
}

else if(search.includes("bed"))
{
    window.location.href = "bed.html";
}

else if(search.includes("dining"))
{
    window.location.href = "dining.html";
}

else if(search.includes("wardrobe"))
{
    window.location.href = "wardrobe.html";
}

else if(search.includes("tv"))
{
    window.location.href = "tv.html";
}

else
{
    alert("Furniture not found");
}


}

function toggleSettings()
{
document
.getElementById("settingsDropdown")
.classList
.toggle("show");
}
