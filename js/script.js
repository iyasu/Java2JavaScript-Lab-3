" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function example(){
  var v = 3 +4;

  display.innerHTML = v;
}

var letterSet= ["a","b","c"];
var numberSet= ["1","2","3"];
var combinedArray=[];
var unorderedNumbers=["50", "2", "1", "9"];

function combineArrays(){
  for(var i=0;i<letterSet.length;i++){
    combinedArray.push(letterSet[i]);
      combinedArray.push(numberSet[i]);
    }
  display.innerHTML= combinedArray;
}

function createLargestNumber(){
  unorderedNumbers.sort(function(a,b){
    return((b.charAt(0))-(a.charAt(0)))});
    var joinedNumber= unorderedNumbers.join("");
  display.innerHTML= joinedNumber;
}
