/**
 * function that returns an object. Each key corresponds to an element 
 * in the array and the value corresponds to how many times that element 
 * apears in the array.
 */
function elementCount(array){
    var count = {};
    for(var i = 0; i < array.length; i++){
        var el = array[i];

        if(count[el] === undefined){
            count[el] = 1;
        } else {
            count[el]++;
        }
    }
    return count;
}

console.log(elementCount(['a', 'a', 'b', 'b', 'c']));
