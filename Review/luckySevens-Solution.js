/**
 * function that returns an array of all numbers up to max (inclusive) that are divisible by 7.
 */
function luckySevens(svn){
    var tempArr = [];
    for(var i = 1; i < svn; i++){
        if(i % 7 === 0){
            tempArr.push(i);
        }
    }
    return tempArr;
}

console.log(luckySevens(25));
console.log(luckySevens(42));