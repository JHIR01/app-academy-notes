/******************************************************************************
Write a function firstAndLast(array) that takes in an array of numbers and
returns either:

- the sum of the first and last elements of the array if there is an even
 number of elements

- the difference between the first and last elements of the array if there is an
 odd number of elements.

You can assume the array contains at least one number.

Examples:

firstAndLast([1, 2, 3, 4]); // => 5
firstAndLast([1, 2, 3, 4, 5]); // => -4
firstAndLast([12, 5]); // => 17
firstAndLast([12]); // => 0
firstAndLast([7, 11, 3]); // => 4
*******************************************************************************/

function firstAndLast(array) {
  var item1 = array[0];
  var item2 = array[array.length -1];
  if(array.length % 2 === 0){
    return item1 + item2;
  }else{
    return item1 - item2;
  }
}

console.log(firstAndLast([1,2,3,4]));
console.log(firstAndLast([1,2,3,4,5]));
console.log(firstAndLast([12, 5]));
console.log(firstAndLast([12]));
console.log(firstAndLast([7,11,3]));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = firstAndLast;
