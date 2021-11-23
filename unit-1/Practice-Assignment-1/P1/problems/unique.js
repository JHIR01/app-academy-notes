/**
 * function that returns an array where all the duplicates 
 * of the input array have been removed; in other words, every element  remaining 
 * is unique
 * 
 * Hint: use 'indexOf'
 */
function unique(array){
    var noDupes = [];
    for(var i = 0; i < array.length; i++){
        var ele = array[i];
        if(noDupes.indexOf(ele) === -1){// if 'ele' is not already indide the noDupes array
            noDupes.push(ele);
        }
    }
    return noDupes;
}

console.log(unique([1,1,2,3,3]));