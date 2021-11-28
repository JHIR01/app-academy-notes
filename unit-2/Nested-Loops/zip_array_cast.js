/**
 * function that takes in two arrays and 'zips' them 
 * together by returning a single 2D-array. Assume
 * that both input arrays have the same length.
 */

var a1 = ['a', 'b', 'c', 'd'];
var a2 = [10, 20, 30, 40];

function  zipArray(arr1, arr2){
    var tempArr = [];
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            tempArr.push([arr1[i], arr2[j]]);
        }
    }
    for(var p = 0; p < tempArr.length; p++){
        console.log(tempArr[p]);
    }
}

var result = zipArray(a1, a2);
console.log(result);

// OR

function zipArray2(arr1, arr2){
    var tempArr = [];
    for(var i = 0; i < arr1.length; i++){
        tempArr.push([arr1[i],arr2[i]]);
    }
    for(var p = 0; i < tempArr.length; p++){
        return tempArr[p];
    }
}

var result = zipArray2(a1, a2);
console.log(result)