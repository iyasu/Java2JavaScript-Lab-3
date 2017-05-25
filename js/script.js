" use strict ";

var display = document.getElementById("display");

function Assignmetn1()
{
  var numList = [1,2,3];
  var charList = ['a', 'b', 'c'];
  var resultList = [];
  for(var i =0; i < numList.length; i++)
  {
    resultList.push(charList[i]);
    resultList.push(numList[i]);
  }
  display.innerHTML+="[";
  display.innerHTML+=resultList.toString();
  display.innerHTML+="]";
}

function Assignment2(arr)
{
  arr.sort();
  display.innerHTML = arr.toString();
  for(i = 0; i < arr.length-1; i++)
  {
    var temp;
    for(j = 0; j < arr.length-1; j++)
    {
      if(singleDigit(arr[j]) < singleDigit(arr[j+1]))
      {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }

    }
  }
      display.innerHTML+="<br>"
      display.innerHTML+=arr.toString()+"<br>";
      for(i =0; i < arr.length; i++)
      {
        display.innerHTML+=arr[i];
      }
}

function singleDigit(num)
{
  if(num > 9)
    return num/10;
  else if(num > 99)
    return num/100;
  else
    return num;
}
