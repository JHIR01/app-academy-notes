/**
 * function that takes in a number and returns 'true' if 
 * the number is even, 'false' otherwise.
 */

 function isOdd(num){
    return num % 2 !== 0;
}

function isEven(num){
    return !isOdd(num);
}

console.log(isEven(2));
console.log(isEven(5));