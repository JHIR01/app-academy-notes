/**
 * function which takes as arguements an object and a callback, and returns a new object where all the key value
 * pairs return true, when passed into the callback.
 */

var obj = {
    one: 'one',
    two: 'Something else',
    three: 'three',
    four: 'another thing'
}

function isEqual(a, b){
    return a === b;
}

var matchingPairs = objectSelect(obj, isEqual);

function objectSelect(obj, cb){
    var newObj = {};
    for(var k in obj){
        var v = obj[k];
        if(cb(k, v) === true){
            newObj[k] = v;
        }
    }
    return newObj;
}

console.log(matchingPairs);