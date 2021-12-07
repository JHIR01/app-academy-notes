/*******************************************************************************
Write a function valueConcat(array, obj) that takes in an array and object
The function should return a new array where each element is concatenated with
it's corresponding value from the object.

Examples:

valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'})
=> [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], {b: 2, c: 3})
=> [ 'a', 'b2', 'c3' ]
*******************************************************************************/

function valueConcat(array, obj) {
  for(var i = 0; i < array.length; i++){
    for(var key in obj){
      if(key === array[i]){
        array[i] += obj[key];
      }
    }
  }
  return array;
}

console.log(valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'}));
console.log(valueConcat(['a', 'b', 'c'], {b: 2, c: 3}));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = valueConcat;
