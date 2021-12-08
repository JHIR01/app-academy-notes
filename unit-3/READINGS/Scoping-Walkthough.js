// Scope 

// var foo = 5; 

// function bar(){
//     var foo = "Anthony";
//     foo + ' is home';
//     return foo;
// }

// console.log(foo); //What is foo on this line?
// console.log(bar()); // what is bar() on this line?
// console.log(foo); // What is foo on his line?

// var foo = 5; 

// function bar(foo){
//     return foo + 65;
// }

// console.log(foo); // What is foo on this line?
// console.log(bar(5)); // What is bar() on this line?
// console.log(foo); // What is foo on this line?
// console.log(bar(5)); // What is bar() on this line?

// var foo = 'Happy';

// for(var foo = 0; foo <= 5; foo++){
//     console.log(foo); // what will foo be on this line?
// }

// console.log(foo); // foo is 6 because the 'for-loop' is not a scope itself, it is a global operation.

// var bar = 5;
// console.log("1: " + bar); // what will bar be in this line?

// var bar = 5;
// console.log('1: ' + bar); // What will bar be on this line?

// function foo(){
//     var bar = 10;
//     console.log('3: ' + bar); // What will bar be on this line?

//     var innerFoo = function(){
//         bar = 15;
//     }
//     innerFoo(); 
//     console.log('4: ' + bar); // What will bar be on this line?
// }

// console.log('2: ' + bar); // What will be on this line?
// foo();
// console.log('5: ' + bar); // what will be on this line?

var bar = 'dance';

function foo(){
    bar = 10;
    var innerFoo = function(){
        var bar = 15;
    }

    console.log('2: ' + bar); // What will bar be on this line?
    innerFoo();
    console.log('3: ' + bar); // What wull bar be on this line?
}

console.log('1: ' + bar); // What will bar be on this line?
foo();
console.log('4: ' + bar); // What will be on this line?