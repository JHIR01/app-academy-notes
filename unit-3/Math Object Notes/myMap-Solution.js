/**
 * function that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the 
 * callback. Do not use the built in 'Array.prototype.map' method. It should return an array where each element is the return value 
 * of the callback given the element in the corresponding position
 */
function myMap(array, cb){
    var mapped = [];
    for(var i = 0; i < array.length; i++){
        var el = array[i];
        var newEl = cb(el, i, array);
        mapped.push(newEl);
    }
    return mapped;
}
function doubler(num){
    return num * 2;
}
console.log(myMap([2,4,6,1], doubler));
console.log(myMap([9,25,100,36,81], Math.sqrt));