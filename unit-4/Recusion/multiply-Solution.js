/**
 * Write a recursive function 'multiply(a, b)' that takes in two numbers
 * and return their product. You may not use the multiplication opertation '*' ni
 * your solution. So this recursively, without loops. Assume that 'a' and 'b'
 * are nonnegatie numbers.
 */
function multiply(a, b){
    // base case
    if(a === 0){
        return 0;
    } else { // recursive case
        var result = b + multiply(a -1, b);
        return result;         
    }
}

console.log(multiply(3, 5));
console.log(multiply(6, 4));
console.log(multiply(0, 100));