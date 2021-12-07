/*******************************************************************************
Write a function `minMaxProduct(array)` that return the product between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxProduct([6, 3, 7, 2]) => 14
minMaxProduct([0, 1, -5, 3, 6]) => -30
*******************************************************************************/

function minMaxProduct(array){
  var min = null;
  var max = null;
  for(var i = 0; i < array.length; i++){
    if(array[i] < min || min === null){
      min = array[i];
    }
    if(array[i] > max || max === null){
      max = array[i];
    }
  }
  return min * max;
}

console.log(minMaxProduct([6, 3, 7, 2]));
console.log(minMaxProduct([0, 1, -5, 3, 6]))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxProduct;
