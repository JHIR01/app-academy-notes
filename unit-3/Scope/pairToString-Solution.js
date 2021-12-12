/**
 * Function that takes in an arrary of pairs. the function should return a string corresponding to the pairs
 */

var arr1 = [
    ['a', 3],
    ['b', 1],
    ['c', 2]
];

var arr2 = [
    ['f', 1],
    ['a', 2],
    ['d', 1],
    ['!', 1]
];

function pairsToString(arr){
    var str = '';
    for(var i = 0; i < arr.length; i++){
        var subArr = arr[i];
        var char = subArr[0];
        var num = subArr[1];
        for(var j = 0; j < num; j++){ // this iterates 'num' number of times
            str += char;
        }
    }
    return str;
}

console.log(pairsToString(arr1));
console.log(pairsToString(arr2));