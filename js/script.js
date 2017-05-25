" use strict ";

var display = document.getElementById("display");

function combineTwoArrays (array1, array2){
  let resultingArray = [];
  if (compareArrayLengths(array1, array2)) {
    for (let i = 0; i < array1.length; i++) {
      resultingArray.push(array1[i]);
      resultingArray.push(array2[i]);
    }
  }
  else {
    for (let i = 0; i < array2.length; i++) {
      resultingArray.push(array2[i]);
      resultingArray.push(array1[i]);
    }
  }
  display.innerHTML = resultingArray;
}

function compareArrayLengths (array1, array2) {
  if (array1 >= array2) {return true;}
  else {return false;}
}

function getLargestNumber(arr){
  display.innerHTML = arr.sort(compare).join("");
}

function compare(a,b) {
  return (b.toString().charAt(0)-a.toString().charAt(0));
}
