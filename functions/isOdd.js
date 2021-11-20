/**
 * Function that takes in a number as an arguement and 
 * returns 'true' if the number is odd and returns 'false'
 * otherwise
 */
function isOdd(num){
    return num % 2 === 0;
}

function isOddOther(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17));

console.log(isOddOther(2));
console.log(isOddOther(5));
console.log(isOddOther(-17));