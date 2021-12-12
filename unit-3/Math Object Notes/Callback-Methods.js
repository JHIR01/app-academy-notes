/**
 * = Callback Methods =
 * - the build-in features and methods that we use everyday
 *      were once written in JS. 
 *      - Meaning all the code that we have been writing 
 *          has already been implemented in JS in some form
 *          before.
 * - you can always reference MDN for documentation on how
 *      to use the follow methods:
 *          https://developer.mozilla.org/en-US/
 */

/**
 * = Array Methods that use Callbacks =
 * - generally, when calling for array methods they are 
 *      structured like this:
 *      - 'array.methodName(...)'
 * -example:
 */
// function double(n){
//     return 2 * n;
// }
// function isEven(n){
//     return n % 2 === 0;
// }
// console.log([1, 2, 3].map(double)); // => [2, 4, 6]
// console.log([9, 100, 16].map(Math.sqrt)); // => [ 3, 10, 4 ]
// console.log([10, 50, 26, 4].every(isEven)); // => true
// console.log([10, 51, 26, 4].every(isEven)); // => false
// console.log([10, 51, 26, 4].some(isEven)); // => true
// console.log([1, 3, 7, 27].some(isEven)); // => false

/**
 * = Iterating with forEach =
 * - 'forEach' - itereates through an array
 * - iterating through an array in order is a very common
 *      operation. 
 * - example:
 */
// function sayHello(name){
//     console.log('Hello ' + name + '!');
// }
// var instructors = ['Ali', 'Meagan', 'Oscar'];
// instructors.forEach(sayHello);

/**
 * = Anonymoous Functions =
 * - in a case where you have to define a function for a 
 *      separate function just to iterate using 'forEach'
 * - using an 'Anonymous function' that we define directly 
 *      in the arguements for 'forEach', you won't have to
 *      iterate through the function
 * - example:
 */
var instructors = ['Ali', 'Meagan', 'Oscar'];
instructors.forEach(function (name){
    console.log('Hello ' + name + '!');
})