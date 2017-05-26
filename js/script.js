" use strict ";

var display = document.getElementById("display");


function arrayCombiner (arrayOne, arrayTwo){
var combinedArray = [];

    for(var i = 0; i< arrayOne.length; i++){
        
        combinedArray.push(arrayOne[i]);
        combinedArray.push(arrayTwo[i]);
    }

  display.innerHTML = combinedArray.toString();
}

function maxNumber(arrayOne){
    
    var digit = "";
    arrayOne.sort();
    
    for(var i = arrayOne.length-1; i>=0; i--){
        digit += arrayOne[i].toString();
    }
    
  display.innerHTML = digit;
    
}