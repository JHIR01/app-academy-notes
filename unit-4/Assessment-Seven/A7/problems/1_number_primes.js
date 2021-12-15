/*******************************************************************************
Write a function numberPrimes(n) that takes in a number, `n`. The function should
return the number of prime numbers less than or equal to `n`. For example,
there are 4 prime numbers less that or equal to 10: 2, 3, 5, 7.

Examples:

numberPrimes(10); // => 4
numberPrimes(12); // => 5
numberPrimes(20); // => 8
numberPrimes(100); // => 25
*******************************************************************************/

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

function primeArrayMaker(num){
  var primeArr = [];
  for(var i = 2; i < num; i++){
    if(isPrime(i)){
      primeArr.push(i);
    }
  }
  return primeArr;
}

// console.log(primeArrayMaker(10));

function numberPrimes(n) {
  var count = 0;
  var primeArray = primeArrayMaker(n);
  return primeArray.length;
}

console.log(numberPrimes(10)); // => 4
console.log(numberPrimes(12)); // => 5
console.log(numberPrimes(20)); // => 8
console.log(numberPrimes(100)); // => 25

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numberPrimes;
