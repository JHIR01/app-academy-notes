/**
 * function that takes in a count object and returns an array filled with the appropiate numbers of elements
 * The order of the elements in the array does not matter, but repeated elements should be grouped.
 */
function arrayBuilder(counter){
    var array = [];
    for(var k in counter){
        for(var i = 0; i < counter[k]; i++){
            array.push(k);
        }
    }
    return array;
}

console.log(arrayBuilder({'a': 3, 'b': 0, 'c': 2}));
console.log(arrayBuilder({'cats': 2, 'dogs': 1}))
console.log(arrayBuilder({}));