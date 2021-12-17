function factorial(n){
    if(n === 1){ // base case
        return 1;
    } else { // recursive case
        var result = n * factorial(n -1);
        return result;
    }
}

console.log(factorial(4)); // => 24
console.log(factorial(1)); // => 1