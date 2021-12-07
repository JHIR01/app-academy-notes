/**
 * function that takes in a number 'num' and returns the nest two prime numbers greater than 'num'
 */
function isPrime(num){
    if(num < 2){
        return false;
    } 

    for(var i = 2; i  < num; i++){
        if(num % i === 0 ){
            return false;
        }
    }

    return true;
}

function nextTwoPrimes(num){
    var primes = [];
    for(var i = num + 1; primes.length < 2; i++){
        if(isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}

console.log(nextTwoPrimes(2));
console.log(nextTwoPrimes(3));
console.log(nextTwoPrimes(7));
console.log(nextTwoPrimes(8));
console.log(nextTwoPrimes(20));
console.log(nextTwoPrimes(97));