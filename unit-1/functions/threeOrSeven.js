/**
 * function that takes in a number and returns 'true' if 
 * the numebher is divisible by either 3 or 7 and 'false'
 * otherwise.
 */

function threeOrSeven(num){
    return (num % 3 === 0 || num % 7 === 0);
}

function threeOrSevenOther(num){
    if (num % 3 === 0 || num % 7 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(threeOrSeven(3));
console.log(threeOrSeven(42));
console.log(threeOrSeven(8));

console.log(threeOrSevenOther(3));
console.log(threeOrSevenOther(42));
console.log(threeOrSevenOther(8));