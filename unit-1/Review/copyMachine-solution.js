/**
 * function that takes in an element and a number
 * it should return an array of length 'num' that is filled with 'element'.
 */
function copyMachine(str, num){
    var tempArr = [];
    for(var i = 1; i < num; i++){
        tempArr.push(str);
    }
    return tempArr;
}

console.log(copyMachine("Jacob", 3));
console.log(copyMachine('candy', 0));
console.log(copyMachine(12, 12));