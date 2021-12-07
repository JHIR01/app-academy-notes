/*******************************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the largest number
that is divides both `num1` and `num2`.

Examples:

greatestCommonFactor(15, 25) => 5
greatestCommonFactor(16, 24) => 8
greatestCommonFactor(7, 11) => 1
*******************************************************************************/

function greatestCommonFactor(num1, num2) {
  for(var i = num1; i >= 1; i--){
    if((num1 % i === 0 && num2 % i === 0)){
      return i;
    }
  }
}

console.log(greatestCommonFactor(15, 25));
console.log(greatestCommonFactor(16, 24));
console.log(greatestCommonFactor(7, 11));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = greatestCommonFactor;
