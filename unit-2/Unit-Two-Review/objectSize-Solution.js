/**
 * function that takes in an object and returns the number of key-value pairs in the object.
 */

var obj1 = {
    name: 'Fido',
    age: '4'
}

var obj2 = {
    name: 'App Academy',
    course: 'Bootcamp Prep',
    locations: ['SF', 'NY']
}

function objectSize(obj){
    var size = 0;
    for(vark in obj){
        size++;
    }
    return size;
}

/**
 * OR
 * function objectSize(obj){
 *     return object.key(obj).length;
 * }
 */

console.log(objectSize(obj1));
console.log(objectSize(obj2));