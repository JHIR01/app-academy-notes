/**
 * function that takes in a 2D-array as an argument.
 * the function should return the total number of 
 * elements in the 2D-array.
 */

var arr1 = [
    [1,2,3],
    [4,5],
    [6,7,8,9]
];

var arr2 = [
    ['a'],
    ['b', 'c', 'd', 'e']
];

function tDSize(array){
    var size = 0;
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){
            size++;
        }
    }
    return size;
}

console.log(tDSize(arr1));
console.log(tDSize(arr2));