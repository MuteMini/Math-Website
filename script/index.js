function validateForm(){
    var x = document.forms["password"]["password"].value;
    if (x == "abracadabra") {
        document.getElementById("nofity").innerHTML = "Great Job!";
        window.location.href = "page1.html";
        return true;
    } else {
        document.getElementById("nofity").innerHTML = "Huh, something is wrong.";
        return false;
    }
}