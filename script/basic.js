var answerKey = ["abracadabra", "1", "1", "1", "1"];

function validateForm(key){
    var x = document.forms["password"]["password"].value;
    var htmlLink;
    if (x == answerKey[key]) {
        document.getElementById("nofity").innerHTML = "Great Job! - You'll be redirected soon.";
        if(key < 4){
            htmlLink = "page"+(key+1)+".html";
        } else {
            htmlLink = "prize.html";
        }
        setTimeout(() => { window.location.href = htmlLink;}, 2000)
    } else {
        document.getElementById("nofity").innerHTML = "Huh, something is wrong. Double-check your password.";
        return false;
    }
}

function openHint(){
    document.getElementById("hint").style.display = "block";
    setTimeout(() => { document.getElementById("hint").style.opacity = 1;}, 100)
}