/*******************************************************************************
Write a function valueReplace(array, object) that takes in an array and an object.
The function should return a new array where each element of the original array
is replaced with it's corresponding value from the object.

Examples:

valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4})
=> [ 1, 2, 'c', 4 ]

valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'})
=> [ 'placements', 'operations', 'tommy' ]
*******************************************************************************/

function valueReplace(array, obj){
  for(var i in obj){
    for(var j = 0; j < array.length; j++){
      if(array[j] === i){
        array[j] = obj[i];
      }
    }
  }
  return array;
}

function valueReplace(array, obj){
  var replaced = [];
  for(var i = 0; i < array.length; i++){
    var ele = array[i];
    if(obj[ele] === undefined){
      replaced.push(ele);
    } else {
      replaced.push(obj[ele]);
    }
  }
  return replaced;
}

console.log(valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4}));
console.log(valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'}));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = valueReplace;
