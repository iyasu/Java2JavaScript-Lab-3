" use strict ";

var display = document.getElementById("display");


function zipArrays() {
    var input1 = prompt("Please enter your first array.");
    var input2 = prompt("Please enter your second array.");
    var arr1 = input1.replace(/[^0-9]/g,'').split("");
    var arr2 = input2.replace(/[^0-9]/g,'').split("");

    if(arr1.length >= arr2.length) {
        for(var i = 1; i < arr2.length; i++){
          arr1.splice(i, 0, arr2[i-1]);
        }
        display.innerHTML = "Your combined array is: [" + arr1 + "]";
    }else{
        for(var i = 0; i < arr1.length; i++){
          arr2.splice(0, 0, arr2[i]);
        }
        display.innerHTML = "Your combined array is: [" + arr2 + "]";
    }
}
    // var result = [];
    // var maxLength = (arr1.length >= arr2.length) ?arr1.length :arr2.length;
    //
    // for (var i = 0; i < maxLength; i++) {
    //     if (arr1[i] != null){
    //         result.push(arr1[i]);
    //     }
    //     if (arr2[i] != null){
    //         result.push(arr2[i]);
    //     }
    // }
    //display.innerHTML = "Your combined array is: [" + result + "]";
}

function largestPossibleNumber(){
    var input1 = prompt("Please enter your array.");
    var tempArr = input1.replace(/[^0-9]/g,'');
    var result  = tempArr.split("").sort().reverse().join("");
    display.innerHTML = "Your input is: ["+ input1 + "]"+ "<br>The Largest Possible Number is: "+result;
}
