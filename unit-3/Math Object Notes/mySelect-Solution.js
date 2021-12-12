/**
 * function that acceptsan array and a callback. It should pass each element, its corresponding index,
 * and the array itself to the callback. It should return a new array of all the elements in the input
 * array 'arr' where the callback 'cb' returns true.
 */
function isEven(num){
    return num % 2 === 0;
}

console.log(mySelect([1,2,3,4,5,6], isEven)); 

function isNegative(num){
    return num < 0;
}

console.log(mySelect([12,-14,4,-10.2,0], isNegative));

function mySelect(arr, cb){
    var selected = [];
    for(var i = 0; i < arr.length; i++){
        var el = arr[i];
        if (cb(el, i, arr)){
            selected.push(el);
        }
    }
    return selected;
}