/**
 * function that returns the factorial of the number 'n' 
 */
function factorial(n){
    var product = 1;
    for(var i = 1; i <= n; i++){ // OR for(var i = n; i >= 1; i--)
        product *= i; // product = product * i
    }
    return product;
}

console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));