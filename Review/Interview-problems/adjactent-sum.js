/**
 * Write a method `adjacent_sum` that takes in an array of numbers and 
 * returns a new array containing the sums of adjacent numbers in the original array. 

adjacent_sum([3, 7, 2, 11]); // [10, 9, 13], because [ 3+7, 7+2, 2+11 ]
adjacent_sum([2, 5, 1, 9, 2, 4]); // [7, 6, 10, 11, 6], because [2+5, 5+1, 1+9, 9+2, 2+4]
 */

function adjacent_sum(arr){
    var newArr = [];
    for(var i = 0; i < arr.length -1; i++){
        newArr.push(arr[i] + arr[i + 1]);
    }
    return newArr;
}
console.log(adjacent_sum([3, 7, 2, 11])); // [10, 9, 13], because [ 3+7, 7+2, 2+11 ]
console.log(adjacent_sum([2, 5, 1, 9, 2, 4])); // [7, 6, 10, 11, 6], because [2+5, 5+1, 1+9, 9+2, 2+4]