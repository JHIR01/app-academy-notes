/*******************************************************************************
Write a function stringRange(min, max, step) that takes in 3 numbers as parameters
The function should return a string containing all numbers between `min` and `max`
at `step` intervals concatenated together.

Examples:

stringRange(0, 12, 2) => '024681012'
stringRange(3, 20, 5) => '381318'
*******************************************************************************/

function stringRange(min, max, step) {
  var returnArr = [];
  for(var i = min; i <= max; i += step){
    returnArr.push(i);
  }
  var together = returnArr.join("");
  return together;
}

console.log(stringRange(0, 12, 2));
console.log(stringRange(3, 20, 5));
console.log(stringRange(10, 100, 3));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = stringRange;
