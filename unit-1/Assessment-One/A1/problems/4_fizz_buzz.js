/******************************************************************************
Write a function fizzBuzz(max) that returns an array of numbers under
the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.

Example:

fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*******************************************************************************/

function fizzBuzz(max) {
  var tempArr = [];
  for(var i = 1; i < max; i++){
    if(i % 3 === 0){
      if(i % 5 !== 0){
        tempArr.push(i);
      }
    } else {
      if(i % 5 === 0){
        if(i % 3 !== 0){
          tempArr.push(i);
        }
      }
    }
  }
  return tempArr;
}

console.log(fizzBuzz(20));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fizzBuzz;
