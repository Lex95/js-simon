var numbers = [];
var MAX_NUMBERS = 5;
var TIMER = 5;

function numberGenerator(num) {
    for (var i = 0; i < num; i++) {
        numbers.push(Math.ceil(Math.random() * 100));
    }
    alert(numbers.join(" "))
}

var numberDisplayer = setInterval(numberGenerator(MAX_NUMBERS), (1000 * TIMER));

clearInterval(numberDisplayer);