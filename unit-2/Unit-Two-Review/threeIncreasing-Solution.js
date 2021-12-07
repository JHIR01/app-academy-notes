/**
 * function that takes in an array of numbers and returns true if the array contains 3 consecutive numbers 
 * in increaseing order. The function should return false otherwise.
 */

function threeIncreasing(arr){
    for(var i = 0; i < arr.length -2; i++){
        var num1 = arr[i];
        var num2 = arr[i + 1];
        var num3 = arr[i + 2];
        if(num1 + 1 === num2 && num2 + 1 === num3){
            return true;
        }
    }
    return false;
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));