/**
 * function that takes in tow objects and a key. The function should return an array 
 * containing the corresponding values of the objects for the given key.
 */

var object1 = {name: 'One', location: 'NY', age: 3}
var object2 = {name: 'Two', location: 'SF'}

function valuePair(obj1, obj2, key){ // the reason why you wouldn't use dot-notation is because it looks for the literal item 'key' when using dot-note
    var val1 = obj1[key];
//  var val2 = obj2.key; // this will not work
    var val2 = obj2[key];
    return [val1, val2];
}

console.log(valuePair(object1, object2, 'location'));
console.log(valuePair(object1, object2, 'name'));
