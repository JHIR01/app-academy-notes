/**
 * function  that takes in an array of numbers and returns the 
 * total sum of them
 */
function sumArray(arr){
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

console.log(sumArray([1,2,3,4,5]));