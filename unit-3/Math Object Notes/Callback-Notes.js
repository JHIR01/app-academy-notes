/**
 * = Higher-Order Functions =
 * - How a JS function is considered higher order:
 *      1. takes a function as an arguement.
 *      2. returns a function as a return value. Think of
 *          functions asa any other data type. they can be 
 *          passed around and stored in variabels like 
 *          simple data.
 * 
 * = Functions as Arguements - Callbacks =
 * - example:
 */
// function higherOrder(cb){
//     console.log('before the callback');
//     cb();
//     console.log('after the callback');
// }

// function sayHello(){
//     console.log('Hello');
// }

// higherOrder(sayHello);
/**
 * the 'sayHello' function will take place of the arguement
 * 'cb' in the 'higherOrder' function. Meaning that calling
 * 'cb()' will just be the arguement of the function, 
 * 'sayHello' function.
 * - 'cb' is actaully used a lot as a variable as a callback
 *      function in many other programs
 */

/**
 * = How to Callback =
 * - when wanting to pass in a function as a callback, we
 *      refer to the name of the function.
 *      - don't call the function before passing it
 * example:
 */
// higherOrder(sayHello());
// this will not wordk because it is not using 'sayHello' as
// a callback
/**
 * - every function call evaluates to it;s return value.
 * - 'sayHello' - refers to the function itself
 * - 'sayHello()' - refers to the return value of the function
 */

/**
 * = A Function is a Function =
 * - Since a callback is a function that we pass as an 
 *      arguement into another function, the it can do all
 *      the things that a noraml function can do.
 * - example:
 */
function higherOrder(cb, str){
    var result = cb(str);
    console.log('result of callbacks: ' + result);
}
function sayGoodbye(name){
    return 'See ya later, ' + name;
}
function respond(name){
    return 'After a while, ' + name;
}
higherOrder(sayGoodbye, 'Alligator');
higherOrder(respond, 'Crocodile');

/**
 * = But Why? =
 * - using arguemtns in a function is useful in general:
 *      - we can pass functions different callbacks and
 *          get drastically different output.
 * - 
 */