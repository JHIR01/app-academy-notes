// Callbacks

// function myFunction(cb){
//     console.log('before cb');
//     cb();
//     console.log('After cb');
// }

// function sayHello(){
//     console.log('hello');
// }

// function sayGoodBye(){
//     console.log('goodbyy');
// }

// myFunction(sayHello);
// console.log('');
// myFunction(sayGoodBye);

// function myFunction(name, cb){
//     var result = cb(name);
//     return result;
// }
// function yell(word){
//     console.log(word.toUpperCase() + '!!!');
// }
// console.log(myFunction('bootcamp', yell));

function addAndCallback(num1, num2, cb){
    var sum = num1 + num2;
    return cb(sum);
}
function yellAnswer(answer){
    console.log(answer + '!!');
}
//addAndCallback(10, 12, yellAnswer);
//addAndCallback(5, 5, console.log)
function double(num){
    return num * 2;
}
var result = addAndCallback(-5, 13, Math.sqrt);
console.log(result);