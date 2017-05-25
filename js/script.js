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

function assignment2() {
    var numbers = new Array(50, 9, 2, 1, );
    var numCatcher = "";
    var numHolder = 1;
    for (var i = 0; i < 1000; i++) {
        var c = Math.floor(Math.random() * numbers.length);
        var index = numbers.indexOf(c);
        var a = numbers.splice(c, 1);
        numbers.unshift(a)
        var sark = numbers.join("");
        if (parseInt(sark) > numHolder) {
            numHolder = parseInt(sark);
            numHolder.toString;
        }
    }
    display.innerHTML = "An array of numbers which contains 50, 9, 2 and 1, the largest number you can generate is <br>"+numHolder;
}
