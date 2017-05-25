" use strict ";

var display = document.getElementById("display");

function zipArrays() {
    var input1 = prompt("Please enter your first array.");
    var input2 = prompt("Please enter your second array.");
    var arr1 = input1.replace(/[^0-9]/g,'').split("");
    var arr2 = input2.replace(/[^0-9]/g,'').split("");
    //always small one add to the bigger one
    if(arr1.length >= arr2.length) {
        arr1.splice(1, 0, arr2[0]);
        for(var i = 1; i < arr2.length; i++){
          arr1.splice(2*i+1, 0, arr2[i]);
        }
        display.innerHTML = "The comined array is: [" + arr1 + "]";
    }else{
        arr2.splice(0, 0, arr1[0]);
        for(var i = 1; i < arr1.length; i++){
          arr2.splice(i+1, 0, arr1[i]);
        }
        display.innerHTML = "The comined array is: [" + arr2 + "]";
    }
}

function largestPossibleNumber(){
    var input1 = prompt("Please enter your array.");
    var tempArr = input1.replace(/[^0-9]/g,'');
    var result  = tempArr.split("").sort().reverse().join("");
    display.innerHTML = "Your input is: ["+ input1 + "]"+ "<br>The Largest Possible Number is: "+result;
}
