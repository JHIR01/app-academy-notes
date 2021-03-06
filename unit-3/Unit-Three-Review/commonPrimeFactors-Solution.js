/**
 * function that takes in two numbers as arguements and returns and array of all prime factors that are 
 * common between the two numbers. A factor is a number that divides another number without resulting in 
 * a remainder.
 */

function isPrime(num){
    if(num < 2){
        return false;
    }
    for(var i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

function commonFactors(num1, num2){
    var factors = [];
    for(var i = 0; i < num2; i++){
        if(num2 % i == 0 && num1 % i === 0){
            factors.push(i);
        }
    }
    return factors;
}

function commonPrimeFactors(num1, num2){
    var common = commonFactors(num1, num2);
    var commonPrimes = [];
    for(var i = 0; i < common.length; i++){
        var factor = common[i];
        if(isPrime(factor)){
            commonPrimes.push(factor);
        }
    }
    return commonPrimes
}

console.log(commonPrimeFactors(12, 50));
console.log(commonPrimeFactors(6, 24));
console.log(commonPrimeFactors(11, 22));
console.log(commonPrimeFactors(45, 60));