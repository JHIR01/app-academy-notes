/*******************************************************************************
Write a function evenSumArray(array) that takes in an array of numbers and returns
a new array where each num is replaced with the sum of all even numbers less than
or equal to that num.

Examples:

evenSumArray([6, 7, 5]) => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) => [ 2, 20, 2, 6 ]
*******************************************************************************/

function evenValue(num){
  var total = 0;
  for(var i = 2; i <= num; i += 2){
    total += i;
  }
  return total;
}

function evenSumArray(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    newArr.push(evenValue(arr[i]));
  }
  return newArr;
}

console.log(evenSumArray([6, 7, 5]));
console.log(evenSumArray([2, 8, 3, 5]));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = evenSumArray;
