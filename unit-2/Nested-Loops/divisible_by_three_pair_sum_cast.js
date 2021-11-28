/**
 * function that takes an array of numbers. It should return an array of all the pairs of indicies, whoes elements sum to a
 * multiple of 3
 */
var arr1 = [1, 6, 3, 4, 2, 0];
var arr2 = [8, 3, 5, 9, 2];
function dbtpSum(array){
    var pairs = [];
    for(var i = 0; i < array.length; i++){
        var num1 = array[i];
        for(var j = i + 1; j < array.length; j++){
            var num2 = array[j];
            if((num1 + num2) % 3 === 0){
                var pair = [i, j];
                pairs.push(pair);
            }
        }
    }
    for(var k = 0; k < pairs.length; k++){
        console.log(pairs[k]);
    }
}

console.log(dbtpSum(arr1));
console.log(dbtpSum(arr2));