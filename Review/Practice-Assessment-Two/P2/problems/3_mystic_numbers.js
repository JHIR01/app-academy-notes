/*******************************************************************************
Write a function mysticNumbers(max) that returns an array of numbers less than `max`.
Each number should be either divisible by 4 or 6, BUT NOT BOTH. The numbers
should be in reverse-sequential order.

Examples:

mysticNumbers(25) => [ 20, 18, 16, 8, 6, 4 ]
mysticNumbers(14) => [ 8, 6, 4 ]
*******************************************************************************/

function mysticNumbers(max) {
  var newArr = [];
  for(var i = max; i > 0; i--){
    if((i % 4 === 0 && i % 6 !==0) || (i % 6 === 0 && i % 4 !== 0)){
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(mysticNumbers(25)); // => [ 20, 18, 16, 8, 6, 4 ]
console.log(mysticNumbers(14)); // => [ 8, 6, 4 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = mysticNumbers;
