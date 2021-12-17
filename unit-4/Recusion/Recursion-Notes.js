// INTRODUCTION-TO-RECUSION

/**
 * = What is Recusion? =
 * - Recursion is when something is defined in terms of itself.
 * - In programming, recusions is when a function calls itself. 
 *      - Recusion has a similar process as calling a helper function, but we are calling the ssame function.
 * 
 * = A Simple Recusion =
 * - example:
 *      function sayHello(){
 *          console.log('Hello');
 *          sayHello();
 *      }
 *      
 *      sayHello(); // prints 'Hello' forever
 *      - when we call 'sayHello' for the first time (sayHello0), we run the
 *          code inside the deinition as usual. The means we print out 'hello' and call
 *          'sayHello' again (sayHello1). Now we need to evaluate the call to 'sayHello1'
 *      - 'sayHello1' prints 'hello' can calls 'sayHello2', now we need to evaluate 
 *          'sayHello2'
 *      - 'sayHello2' prints 'hello' and calls 'sayHello3'
 *      - this will go on forever
 * 
 * = Recusive Countdown =
 * - example of a recusive function that does not go forever or crash:
 *      function countDown(num){
 *          console.log(num);
 *          countDown(num -1);
 *      }
 *      
 *      countDown(10); // this prints decreasing numbers starting at 10 forever
 *      - in similar fashion to the last example, the function will not stop running because there is no 
 *          condition for the function to stop calling itself
 * - example of how to stop a recusive function(how to stop the previous function):
 *      function countDown(num){
 *          if(num === 0){
 *              console.log("Houston, we have lift-off!");
 *              return;
 *          }
 *          console.log(num);
 *          countDown(num -1);
 *      }
 *      
 *      countDown(10); // prints numbers from 10 to 1, and finally 'Houston, we have lift-off!'
 */
function countDown(num){
    if(num === 0){
        console.log('Houston, we have lift-off!');
        return; // 'return' statements close the loop in order to return whatever the function is told to give
    }
    console.log(num);
    countDown(num -1)
}

countDown(10);
console.log('');

/**
 * = Anatomy of a Recusive Function =
 * - We need to implement a way to stop the recursive loop and prevent it from looping forever.
 * - A recusive function consists of two fundamental parts:
 *      1. the base case where we halt the recusion by not making a subsequent call
 *      2. the recursive stop where we continue the recusion by making another subsequent call.
 *      - Example:
 *          function countDown(num){
 *              // base case
 *              if(num === 0){
 *                  console.log('Houston, we have lift-off!');
 *              }
 *              console.log(num);
 *              // recursive step
 *              countDown(num -1);
 *          }
 */

// Solving problems using Recursion:

/**
 * Write a function `factorial(n)` which takes a number and returns the factorial of n.
 * A factorial is the product of all whole numbers between 1 and n, inclusive.
 * For example, `factorial(5)` is 5 * 4 * 3 * 2 * 1 = 120.
 */
function factorial(num){
    // base case
    if(num === 1){
        return 1;
    }
    // recursive step
    return num * factorial(num -1);
}
console.log(factorial(5)); // => 120
console.log('');

/**
 * Write a function `power(base, exp)` that takes in two numbers.
 * The function should return `base` raised to the `exponent` power.
 * For example `power(2, 5)` is 2 * 2 * 2 * 2 * 2 = 32.
 */
function power(base, exp){
    // base case
    if(exp == 0){
        return 1;
    }
    // recursive step
    return base * power(base, exp -1);
}
console.log(power(2, 5)); // => 32
console.log('');

/**
 * Write a function fib(n) that takes in a number and returns the nth number of
 * the fibonacci sequence.
 * In the fibonacci sequence, the 1st number is 1 and the 2nd number is 1. To generate the
 * next number in the sequence, we take the sum of the previous two fibonacci numbers.
 * For example the first 5 numbers of the fibonacci sequence are `1, 1, 2, 3, 5`
 * 
 * Examples:
 * 
 * fib(1) // => 1
 * fib(2) // => 1
 * fib(3) // => 2
 * fib(4) // => 3
 * fib(5) // => 5
 * fib(6) // => 8
 * fib(7) // => 13
 */
function fib(num){
    // base case
    if(num === 1 || num === 2){
        return 1;
    }
    // recusion step
    var answer = fib(num -1) + fib(num -2);
    return answer
}
console.log(fib(7)); // => 13

/**
 * = When is recusion appropiate? =
 * - Recursion is used to solve problems that can be decomposed into smaller cersion of the same problem
 */