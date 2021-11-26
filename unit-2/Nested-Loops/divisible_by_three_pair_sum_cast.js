/**
 * function that takes an array of numbers. It should return an array of all the pairs of indicies, whoes elements sum to a
 * multiple of 3
 */
var arr1 = [1, 6, 3, 4, 2, 0];
var arr2 = [8, 3, 5, 9, 2];
function dbtpSum(array){
    var paris = [];
    for(var i = 0; i < array.length; i++){
        var num1 = array[i];
        for(var j = 0; j < array.length; j++){
            var num2 = array[j];
            if((num1 + num2) % 3 === 0){
                var pair = [i, j];
                paris.push(pair);
            }
        }
    }
    return paris;
}

console.log(dbtpSum(arr1));