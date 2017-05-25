" use strict ";

var display = document.getElementById("display");

function assigntment3Point1(){
  var numArray = [1,2,3,4,5,6,7,8];
  var letterArray= ["a","b","c","d","e","f","e","g"];
  var tempArr = [];
    for (var i = 0; i < numArray.length; i++) {
        tempArr.push(numArray[i],letterArray[i]);
    }
  display.innerHTML = tempArr;
}

function example(){
  var v = 3 +4;

  display.innerHTML = v;
}
