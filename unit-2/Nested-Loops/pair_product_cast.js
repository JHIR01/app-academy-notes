/**
 * write a function that accepts an array of numbers and target number (num). It should return pairs of indices whose
 * elements multiply to 'num'. NO pair should appear twice in the result.
 * Use only 'while-loops', no for-loops.
 */
var p1 = ([1,2,3,4,5], 4);
var p2 = ([1,2,3,4,5], 8);
var p3 = ([1,2,3,12,8], 8);

function pairProduct(arr, num){
    var pairs = [];
    var i = 0;
    while(i < arr.length){
        var j = i + 1;
        while(j < arr.length){
            if(arr[i] * arr[j] === num){
                pairs.push([i, j]);
            }
            j++;
        }
        i++;
    }
    for(var p = 0; p < pairs.length; p++){
        console.log(pairs[p]);
    }
}

console.log(pairProduct([1,2,3,4,5], 4));
console.log(pairProduct([1,2,3,4,5], 8));
console.log(pairProduct([1,2,3,12,8], 24));