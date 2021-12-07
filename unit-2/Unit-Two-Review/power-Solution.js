/**
 * function that takes in two numbers, a base and exponent. The function should return 'base'
 * 'raised' to 'exp' power.
 */

function power(base, exp){
    var product = 1;
    for(var i = 0; i < exp; i++){
        product *= base;
    }
    return product;
}

console.log(power(2, 5));
console.log(power(2, 10));
console.log(power(9, 2));
console.log(power(11, 0));
console.log(power(11, 1));