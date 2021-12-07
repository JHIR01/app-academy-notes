/*******************************************************************************
Write a function isElement(array, ele) that takes an array and an element.
The function should return true if the element is found inside of the array, it
should return false otherwise.

DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!

Examples:

isElement([1,2,3,4,5], 5) => true
isElement(["a", "b", "c"], "a") => true
isElement(["a", "b", "c"], "d") => false
*******************************************************************************/

function isElement(array, ele){
  for(var i = 0; i < array.length; i++){
    if(array.indexOf(ele) !== -1){
      return true;
    }
  }
  return false;
}

function isElement(array, ele){
  for(var i = 0; i < array.length; i++){
    if(array[i] === ele){
      return true;
    }
  }
  return false;
}

console.log(isElement([1,2,3,4,5], 5));
console.log(isElement(["a", "b", "c"], "a"));
console.log(isElement(["a", "b", "c"], "d"));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isElement;
