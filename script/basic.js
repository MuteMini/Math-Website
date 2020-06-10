var answerKey = ["abracadabra"];

function validateForm(key){
    var x = document.forms["password"]["password"].value;
    if (x == answerKey[key]) {
        document.getElementById("nofity").innerHTML = "Great Job! - You'll be redirected soon.";
        setTimeout(() => { window.location.href = "page1.html";}, 2000)
    } else {
        document.getElementById("nofity").innerHTML = "Huh, something is wrong. Double-check your password.";
        return false;
    }
}

function openHint(){
    document.getElementById("hint").style.display = "block";
    setTimeout(() => { document.getElementById("hint").style.opacity = 1;}, 100)
}