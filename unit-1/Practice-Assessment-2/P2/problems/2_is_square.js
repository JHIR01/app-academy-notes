/*******************************************************************************
Write a function isSquare(number) that takes in a number and returns true if the
number is a perfect square, false otherwise. A perfect square is a number that is
the result of squaring another number. For example, 3 * 3 is 9, so 9 is perfect
square. 4 * 4 is 16, so 16 is a perfect square. 18 is not a perfect square.

Examples:

isSquare(7) => false
isSquare(15) => false
isSquare(18) => false
isSquare(25) => true
isSquare(36) => true
isSquare(9) => true
isSquare(16) => true
*******************************************************************************/

function isSquare(number) {
  var tempNum = number / 2;
  if(number % 2 === 0){
    return false;
  } else if(tempNum * tempNum === number){
    return true;
  }
}

console.log(isSquare(15));
console.log(isSquare(18));
console.log(isSquare(25));
console.log();

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isSquare;
