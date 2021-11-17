/**
 * function that returns the numerical average of the array
 */
function avgValue(arr){
    var avg = 0;
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        total += arr[i]
    }
    avg = total/arr.length;
    return avg;
}

console.log(avgValue([1,2,3,3,3,3,3,3,4]));