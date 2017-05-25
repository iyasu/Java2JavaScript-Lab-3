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

function assignment3Point2(numArr){
  var result = "";
  for (var i = 0; i < numArr.length; i++){
    str += numArr[i];
  }
  for (var i = 0; i < result.length; i++){
    str+= numArr[i];
  }
  numArr = numArr.sort().reverse();
  result = "";
  for (var i = 0; i < numArr.length; i++){
    result += numArr[i];
  }
  display.innerHTML = result;
}
// Simply for the giggles, it actually works though...
function cheekyOneLinerForALaugh(numArr){
  var sortedArr = numberArr.sort().join('').split('').sort().reverse().join('');
  return sortedArr;
}
