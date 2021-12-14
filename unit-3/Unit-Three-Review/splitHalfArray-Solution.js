/**
 * function that takes in an array as an arguement and returns two halves of that array split in the middle.
 * If the array has an odd number of elements, then the middle element should be excluded.
 */

function splitHalfArray(array){
    var mid = Math.floor(array.length / 2);
    if(array.length % 2 === 0){ // if there is an even number of elements
        var halves = [array.slice(0, mid), array.slice(mid)];
    } else {
        var halves = [array.slice(0, mid), array.slice(mid +1)];
    }
    return halves;
}

console.log(splitHalfArray([1,2,3,4,5]));
console.log(splitHalfArray(['a','b','c','d','e','f']));