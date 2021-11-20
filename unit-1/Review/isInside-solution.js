/**
 * function that returns true if 'ele' is an element inside of the 'array', false otherwise.
 */
var names = ['Jacob', 'Mel', 'Jeff', 'CJ'];

function isInside(arr, ele){
    for(var i = 0; i < arr.length; i++){
        if(ele === arr[i]){
            return true;
        }
    }
    return false;
}

console.log(isInside(names, 'Jeff'));