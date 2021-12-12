/**
 * function that takes in an array and a callback. The function should call the cb for every element of the 
 * array. The function should return true only if the callback returns true when passed in every the element 
 * of the array. The function should return false otherwise.
 */

function myEvery(arr, cb){
    for(var i = 0; i < arr.length; i++){
        var el = arr[i];
        if(cb(el) === false){
            return false;
        }
    }
    return true;
}

function isEven(num){
    return num % 2 === 0;
}

function isCapital(str){
    return str === str.toUpperCase();
}

console.log(myEvery(['A', 'B', 'C'], isCapital));
console.log(myEvery(['A','B','C','z'], isCapital));

console.log(myEvery([10,4,8,20],  isEven));
console.log(myEvery([2,2,10,11,12], isEven));