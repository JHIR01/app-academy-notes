/**
 * Function that accapets an array and a callback. It should call the 'cb' for every element of the array, passing the element, its
 * corresponding index, and the array itself to the callback. Do not use the built-in 'Array.prototype.forEach' method.
 */
function printInfo(ele, i, arr){
    console.log(ele, 'is at position', i, 'in array', arr);
}

function printHalf(num){
    console.log(num/2);
}

function myForEach(arr, cb){
    for(var idx = 0; idx < arr.length; idx++){
        var el = arr[idx];
        cb(el, idx, arr);
    }
}

myForEach(['a', 'b', 'c'], printInfo);

function printHalf(num){
    console.log(num/2);
}

myForEach(['10', '50', '120'], printHalf);