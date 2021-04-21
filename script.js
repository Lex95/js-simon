var MAX_NUMBERS = 5;
var TIMER = 5;
var numbers = [];
var userNumbers = [];
var validNumbers = [];
var counter = 0;
var myTimer = TIMER

for (var i = 0; i < MAX_NUMBERS; i++) {
    numbers.push(Math.ceil(Math.random() * 100));
}
alert(numbers.join(" - "))

function askNumbers(arrayNumbers) {
    for (i = 0; i < numbers.length; i++) {
        arrayNumbers.push(parseInt(prompt("Inserisci uno alla volta i numeri che ti ricordi:")));
    }
}

setTimeout(function () {
    askNumbers(userNumbers);
    for (i = 0; i < numbers.length; i++) {
        if (numbers.indexOf(userNumbers[i]) >= 0) {
            counter++
            validNumbers.push(userNumbers[i]);
        }
    }

    document.getElementById("myH2").innerHTML = "Hai indovinato " + counter + " numeri!<br>" + validNumbers.join(" ");
}, (1000 * TIMER));

// timer a video (bonus)
var visibleTimer = setInterval(function() {
    if (myTimer == 0) {
        clearInterval(visibleTimer);
    } else {
        document.getElementById("myH1").innerHTML = --myTimer + "s";
    }
}, 1000)