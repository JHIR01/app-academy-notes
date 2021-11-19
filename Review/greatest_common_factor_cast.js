/**
 * function that returns the greatest common factor between num1 and num 2. This means that the function should return the largest number that devides both
 * num1 and num2.
 */
function greatestCommonFactor(num1, num2){
    var gcf = null;
    for(var i = num1; i >= 1; i--){
        if(num1 % i === 0 && num2 % i === 0){
            return i;
        }
    }
}

console.log(greatestCommonFactor(6,10));
console.log(greatestCommonFactor(10, 15));
console.log(greatestCommonFactor(4,7));