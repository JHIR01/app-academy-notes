/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*******************************************************************************/

function intersect(arr1, arr2) {
  var tempArr = [];
  for(var i = arr1.length -1; i >= 0; i--){
    var tempI = arr1[i];
    if(tempI != arr){

    }
  }
  return tempArr;
}

console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = intersect;
