/**
 * function that takes in an array  and a callback. The function should call the callback for every element of the array.
 * The function should return true if the callback return true when passsed in any element of the array.
 */

function isNegative(num){
    return num < 0;
}

function mySome(arr, cb){
    for(var i = 0; i < arr.length; i++){
        var el = arr[i];
        if(cb(el) === true){
            return true;
        }
    }
    return false;
}

console.log(mySome([10,-10,11,4], isNegative));
console.log(mySome([-10,-10,-11,-4], isNegative));
console.log(mySome([2,4,6,8], isNegative));