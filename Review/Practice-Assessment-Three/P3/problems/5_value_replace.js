/*******************************************************************************
Write a function valueReplace(array, object) that takes in an array and an object.
The function should return a new array where each element of the original array
is replaced with it's corresponding value from the object.

Examples:

valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4})
=> [ 1, 2, 'c', 4 ]

valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'})
=> [ 'placements', 'operations', 'tommy' ]
*******************************************************************************/

function valueReplace(array, obj){
    var newArr = [];
    for(var i = 0; i < array.length; i++){
        if(obj[array[i]] === undefined){
            newArr.push(array[i]);
        } else {
            newArr.push(obj[array[i]]);
        }
    }
    return newArr;
}

console.log(valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4}));
console.log(valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'}));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = valueReplace;
