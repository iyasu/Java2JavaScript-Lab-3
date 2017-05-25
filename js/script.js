" use strict ";

var display = document.getElementById("display");

function assignment1() {

    var characters = ["a", "b", "c"];
    var numbers = [1, 2, 3];
    var newFilledArray = [];
    for (var i = 0; i < characters.length; i++) {
        newFilledArray.push(characters[i]);
        newFilledArray.push(numbers[i]);
    }
    display.innerHTML = newFilledArray;
}

function adder(){
    
    var numbers = prompt("Add any amount of numbers separated by commas");
    
    assignment2(numbers.split(","));
}

function assignment2(numbers) {
   // var numbers = Array(50, 9, 2, 1);
    var numCatcher = "";
    var numHolder = 1;
    for (var i = 0; i < 1000; i++) {
        var randomNumber = Math.floor(Math.random() * numbers.length);
        var index = numbers.indexOf(randomNumber);
        var splicedNumber = numbers.splice(randomNumber, 1);
        numbers.unshift(splicedNumber)
        var joinNumber = numbers.join("");
        if (parseInt(joinNumber) > numHolder) {
            numHolder = parseInt(joinNumber);
            numHolder.toString;
        }
    }
   display.innerHTML = "An array of numbers which contains "+ numbers+ ". The largest number you can generate is: <br>" + numHolder;
    // display.innerHTML = numHolder;
}
