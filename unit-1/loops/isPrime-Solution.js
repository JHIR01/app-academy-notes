/**
 * function that return 'true' if a number if prime. If not, then the assume the number is not a prime and return 'false'
 */
function isPrime(number){
    // check if no nums less than 'number' divide into number 
    for (var i = 2; i < number; i +=1){
        if(number % i === 0){
            // if 'i' divides into a number than the number is no longer considered to be a prime numebr
            return false;
        } 
    }
    // we only know if a number is prime after we check all factors
    return true;
}

console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(12345));