/**
 * function that takes an array and number. it should count the number od times that two adjacent numbers in an array add up 
 * to n.
 */
function countAdjacentSums(array, n){
    var count = 0;
    for(var i = 0; i < array.length -1; i++){
        if(array[i] + array[i + 1] === n){
            count++;
        }
    }
    return count;
}

console.log(countAdjacentSums([1,5,1], 6));
console.log(countAdjacentSums([7,2,4,6], 7));
console.log(countAdjacentSums([6,7,11,2,5,10,3], 13));