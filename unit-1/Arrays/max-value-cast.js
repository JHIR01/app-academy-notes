/**
 * function that return the largest value in 'array'
 * assume 'array' is an array of numbers
 */
function maxValue(arr){
    var maxNum = null;
    // this loop check every element in the array.
    for(var i = 0; i < arr.length; i++){
        var num = arr[i];
        if (num > maxNum || maxNum === null){
            maxNum = num;
        }
    }
    return maxNum;
}

console.log(maxValue([1,23,43,2]));