/**
 * Function that takes in a 2D array of numbers and returns the total sume of all the elements
 */
var arr1 = [
    [5,2,5,3],
    [12,13]
];
var arr2 = [
    [2],
    [1,9],
    [1,1,1]
];

function twoDimensionalTotal(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){
            sum += array[i][j];
        }
    }
    return sum;
}

console.log(twoDimensionalTotal(arr1));
console.log(twoDimensionalTotal(arr2));