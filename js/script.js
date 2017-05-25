" use strict ";

var display = document.getElementById("display");

function yourFunctionName (arr1, arr2){
    var newArr = [];
    for(i = 0; i < arr1.length && arr2.length; i++){
        newArr.push(arr1[i]);
        newArr.push(arr2[i]);
    }
    //display.innerHTML = newArr;
    return newArr;
   
}

function example(arr){
    var str = "";
    for(i = 0; i < arr.length; i++){
        str += arr[i];    
    }
    for(i =0; i < str.length; i++){
        arr[i] = str.charAt(i);
    }
    arr = arr.sort().reverse()
    str = "";
    for(i = 0; i < arr.length; i++){
        str += arr[i];    
    }
    
    //display.innerHTML = str;
    return str;
}