/*******************************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the largest number
that is divides both `num1` and `num2`.

Examples:

greatestCommonFactor(15, 25) => 5
greatestCommonFactor(16, 24) => 8
greatestCommonFactor(7, 11) => 1
*******************************************************************************/

function greatestCommonFactor(num1, num2) {
  var gcf = null;
  for(var i = 0; i < num2; i++){
    if((i % num1 === 0 && i % num2 !== 0) || (i % num2 === 0 && i % num1 !== 0)){
      return i;
    }
  }
}

console.log(greatestCommonFactor(15, 25));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = greatestCommonFactor;
