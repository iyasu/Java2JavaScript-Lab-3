" use strict ";

var display = document.getElementById("display");

function combineArrays(arr1, arr2) {
    
    var arrays = arr1.map(function(el, i) {
        return [el, arr2[i]];
    })
    display.innerHTML = [].concat.apply(arrays);
}

function largestPossibleNumber(numArr) {
    var splitArr = numArr.map(function(num) {
        num = num+"";
        return num.split("");
    })
    
    splitArr.sort(function(a, b) {
        return b[0] - a[0];
    })
    var flat = [].concat.apply([], splitArr);
    display.innerHTML = flat.join("");

}