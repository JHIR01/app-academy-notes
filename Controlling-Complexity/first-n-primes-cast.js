/**
 * Decomposition
 * 
 * function that writes a function 'firstNPrime(n)' that returns an
 * array of the first 'n' prime numbers
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

function firstNPrimes(num){
    var primes = [];

    var i = 2;
    while(primes.length < num){
        if(isPrime(i)){
            primes.push(i);
        }
        i++;
    }
    return primes;
}

console.log(isPrime(4));
console.log(firstNPrimes(0));
console.log(firstNPrimes(1));
console.log(firstNPrimes(10));