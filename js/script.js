" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function example(){
  var v = 3 +4;

  display.innerHTML = v;
}

function zipper(){
  var letters = ['a', 'b', 'c'];
  var numbers = ['1', '2', '3'];
  var zipper = [];
  for (var i = 0; i < letters.length; i++){
    zipper.push([letters[i], numbers[i]]);
  }
  display.innerHTML = zipper;
}
