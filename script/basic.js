var answerKey = [["abracadabra"],[27.2, 4.2, 1.7, 2, -0.5],[6, 12.1, 11.7, 9],[12.7, 7, 3.2, 8.3, 34.4],[1, 1, 1, 1, 1]];

function validateForm(key){
    var x = document.forms["password"];
    var allInput = x["input"];
    if(typeof allInput[0] === 'undefined'){
        allInput = Array(allInput);
    }
    for(var i = 0; i < allInput.length; i++){
        if (key != 1 && Math.round(allInput[i].value * 10) / 10 == answerKey[key-1][i] || allInput[i].value == answerKey[key-1][i])  {
            continue;
        }
        else {
            console.log(allInput[i].value);
            console.log(answerKey[key-1][i]);
            console.log(key-1);
            console.log(i);
            console.log("what");
            document.getElementById("nofity").innerHTML = "Huh, something is wrong. Double-check your answers.";
            return false;
        }
    }
    document.getElementById("nofity").innerHTML = "Great Job! - You'll be redirected soon.";
    if(key > 4)
        setTimeout(() => { window.location.href = "prize.html";}, 2000)
    else
        setTimeout(() => { window.location.href = "page"+key+".html";}, 2000)
}

function openHint(){
    document.getElementById("hint").style.display = "block";
    setTimeout(() => { document.getElementById("hint").style.opacity = 1;}, 100)
}