/**
 * function that takes in an array of numbers and returns true if the array contains 3 of the same number consecutively.
 * The function should return false otherwise.
 */

function threeInARow(array){
    for(var i = 0; i < array.length - 2; i++){ // the reason why there is a '- 2' is so that when looping, you don't overstep the array
        if(array[i] === array[i + 1] && array[i] === array[i + 2]){
            // if I have three in a row...
            return true;
        }
    }
    return false;
}

console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));
console.log(threeInARow([10, 9, 20, 33, 3, 3]));
console.log(threeInARow([3, 5, 5, 5, 6]));