/**
 * Decomposition 
 * 
 * when given a large problem, break it down into smaller problems
 * to solve it 
 * 
 * function that takes in a number and returns the laligotSum of that
 * number. A number's laligot sum is the sum of all the prime numbers
 * less than or equal to that number.
 */
function isPrime(num){
    if(num < 2){
        return false
    } 

    for(var i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }

    return true;
}

console.log(isPrime(4));
console.log(isPrime(2));

function laligotSum(num){
    var sum = 0;
    for(var i = 2; i <= num; i++){
        if(isPrime(i)){
            sum += i;
        }
    }
    return sum;
}

console.log(laligotSum(10));
console.log(laligotSum(11));