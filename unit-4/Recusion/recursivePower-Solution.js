function power(base, exp){
    if(exp === 0){ // base case
        return 1;
    } else { // recursive step
        var result = base * power(base, exp -1);
        return result;
    }
}

console.log(power(2, 3));
console.log(power(2, 4));
console.log(power(10, 5));