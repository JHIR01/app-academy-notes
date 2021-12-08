/**
 * 
 */

// 'myName' is a 'global scope'
// 'Global Scopes' are the largest and most outer scope there is in JS
// var myName = 'Jacob';

// // JS has function scopes. New functions means new scopes
// function foo(){
//     var myName = 'bootcamp prep';
//     console.log(myName);
// }

// console.log('global myName before', myName);
// foo();
// console.log('global myname after', myName);

/**
 * you can make variable without the 'var' keyword but something interesting will happen.
 */
// var myName = 'Jacob';

// function foo(){
//     myName = 'bootcamp prep';
//     console.log(myName);
// }

// console.log('global myName before', myName);
// foo();
// console.log('global myname after', myName);
// by getting rid of the 'var' statement in the function, 'myName' isn't just a variable created in the inner scope. 
// it's calling for a variable in the outter scope and changing it.

// Scope

// Scoping Rule: if we are in an inner scope, we can access variables from the out scope. However, it will not work the other way around

// var myName = 'bootcamp';

// function foo(){
//     console.log(myName);
// }

// foo();
// think of variables being 'nested'

// example where we cannot access variables from the inner scope when on the outer scope

// var myName = 'bootcamp';

// function foo(){
//     myName = 42
// }

// foo();
// console.log(myName);

function func1(){
    var myFavoriteFood = 'pizza'; // local to this function
    console.log(myFavoriteFood);
}

function func2(){
    var myFavoriteFood = 'pasta'; // local to this function
    console.log(myFavoriteFood);
}

func1();
func2();