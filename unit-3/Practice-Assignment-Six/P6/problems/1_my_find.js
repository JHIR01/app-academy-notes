/*******************************************************************************
Write a function `myFind(arr, cb)` that accepts an array and a callback. It should
return the first element of the array where the callback returns true when passed
each element. The function should return undefined if the callback does not return
true for any element.

Example:

function isUpper(str) {
  return str.toUpperCase() === str;
}

myFind(['bootcamp', 'PREP', 'IS', 'fun'], isUpper) => 'PREP'
myFind(['hello', 'world'], isUpper) => undefined


function isEven(n) {
  return n % 2 === 0;
}

myFind([11, 7, 10, 20], isEven) => 10
myFind([3, 5, 9], isEven) => undefined
*******************************************************************************/

function isUpper(str) {
  return str.toUpperCase() === str;
}

function isEven(n) {
  return n % 2 === 0;
}

function myFind(arr, cb) {
  for(var i = 0; i < arr.length; i++){
    if(cb(arr[i])){
      return arr[i];
    }
  }
}

console.log(myFind(['bootcamp', 'PREP', 'IS', 'fun'], isUpper));
console.log(myFind(['hello', 'world'], isUpper));

console.log(myFind([11, 7, 10, 20], isEven));
console.log(myFind([3, 5, 9], isEven));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myFind;
