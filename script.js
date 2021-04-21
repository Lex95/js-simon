var numbers = [];
var MAX_NUMBERS = 5;
var TIMER = 30;

for (var i = 0; i < MAX_NUMBERS; i++) {
    numbers.push(Math.ceil(Math.random() * 100));
}
alert(numbers.join(" - "))

var userNumbers = [];

function askNumbers(arrayNumbers) {
    for (i = 0; i < numbers.length; i++) {
        arrayNumbers.push(parseInt(prompt("Inserisci uno alla volta i numeri che ti ricordi:")));
    }
    return arrayNumbers;
}

setTimeout(askNumbers(userNumbers), (1000 * TIMER));
// clearTimeout(askNumbers);

var counter = 0;
var validNumbers = [];

for (i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(userNumbers[i]) >= 0) {
        counter++
        validNumbers.push(userNumbers[i]);
    }
}

document.getElementById("myH1").innerHTML = "Hai indovinato " + counter + " numeri!<br>" + validNumbers.join(" ");

