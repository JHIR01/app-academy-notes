/**
 * function that returns the sum of the first 'n' prime numbers
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

function sumOfNPrimes(n){
    var primes = firstNPrimes(n);
    var totalSum = 0;

    for(var i = 0; i < primes.length; i++){
        var primeNum = primes[i];
        totalSum += primeNum;
    }
    return totalSum;
}

console.log(sumOfNPrimes(4));