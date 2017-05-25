" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function example(){
  var v = 3 +4;
  
  display.innerHTML = v;
}

function zipperArray() {
	var a = [], b = [], retArray = [];
	var size = prompt("How long are your arrays?")
	for(_i = 0; _i < size; _i++) {
		a[_i] = prompt("entry element " + _i + " from array 1")
	}
	for(_j = 0; _j < size; _j++) {
		b[_j] = prompt("enter element " + _j + " from array 2")
	}
	for(i = 0; i < size; i++) {
		retArray[2*i] = a[i]
		retArray[2*i + 1] = b[i]
	}
	display.innerHTML = retArray
}

function largestConcatenatedNumber() {
	var size = prompt("How long is your array?")
	var arr = []
	for(_i = 0; _i < size; _i++) {
		arr[_i] = prompt("enter element " + _i)
	}
	var permArray = recursivePermutator(arr)
	var max = 0
	for(i = 0; i < permArray.length; i++) {
		str = ""
		for(j = 0; j < size; j++) {
			str += permArray[i][j]
		}
		if(str > max) {
			max = str
		}
	}
	display.innerHTML = max
}

//https://stackoverflow.com/questions/9960908/permutations-in-javascript
function recursivePermutator(arr) {
	var permArr = []
	var usedNumbers = []

	function permute(arr) {
	  var i, ch;
	  for (i = 0; i < arr.length; i++) {
	    ch = arr.splice(i, 1)[0];
	    usedNumbers.push(ch);
	    if (arr.length == 0) {
	      permArr.push(usedNumbers.slice());
	    }
	    permute(arr);
	    arr.splice(i, 0, ch);
	    usedNumbers.pop();
	  }
	  return permArr
	};

	return permute(arr)
}	