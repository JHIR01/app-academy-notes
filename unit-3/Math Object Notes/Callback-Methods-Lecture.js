/**
 * Array methods that take callbacks:
 * some, every, map forEach
 */

function isEven(num){
    return num % 2 === 0;
}
console.log(isEven(16));
console.log(isEven(17));
console.log([1,2,3].some(isEven)); // This evaluates if there are even numbers in the array
console.log([4,6,8].every(isEven)); // This evaluates if every element is even
console.log([1,2,3].every(isEven));  

function triple(num){
    return 3 * num;
}

console.log([15, 10, 2].map(triple));

function yellStr(str){
    console.log(str + '!');
}

var names = ['Chase', 'Phi', 'Eliot']

names.forEach(yellStr);

// Anonomys function
names.forEach(function(name) {
    console.log('Hello ' + name + '!');
});

for(var i = 0; i < names.length; i++){
    console.log('Hello ' + names[i] + '!');
}