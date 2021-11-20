/**
 * function that takes in an array as an arguement and retuens a new array "mirrored"
 */
function mirrorArray(arr){
    var mirrored = [];

    for(var i = 0; i < arr.length; i++){
        mirrored.push(arr[i]);
    }

    for(var i = arr.length -1; i >= 0; i--){
        mirrored.push(arr[i])
    }

    return (mirrored);
}

console.log(mirrorArray([1,2,3]));