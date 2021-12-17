/**
 * Write a function 'reverseString(string)' that takes in a string as a parameter
 * and return the string reversed. Do this recursively. You should not use 
 * the array.reverse method.
 */

function reverseString(string){
    if(string === ''){ // base case
        return '';
    } 
    var firstChar = string[0];
    var rest = string.slice(1);
    var reversed = reverseString(rest)+ firstChar;
    return reversed;
}

console.log(reverseString('bootcamp'));
console.log(reverseString('app academy'));
console.log(reverseString(''));