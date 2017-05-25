" use strict ";

var display = document.getElementById("display");

function combineArrays(letters, numbers) {
    let combined = [];
    for (let i = 0; i < letters.length; i++) {
        combined.push(letters[i]);
        combined.push(numbers[i]);
    }

    display.innerHTML = "[" + combined + "]<br>";
}

function largeNumber(someNumbers) {
    someNumbers = someNumbers.sort().reverse();
    let result = "";
    for(let i = 0; i < someNumbers.length; i++){
        result += someNumbers[i];
    }
    display.innerHTML = result;
}