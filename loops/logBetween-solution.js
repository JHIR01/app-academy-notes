function logBetween(num1, num2){
    for(var i = num1; i <= num2; i++){
        console.log(i)
    }
}

logBetween(1,5);
console.log(" ");
logBetween(4,6);
console.log(" ");
logBetween(5,10);

/**
 * One thing to note about this method is that the 'num1' must be smaller than 'num2' for the condition 
 * to be met and be true. If the condition isn't met initially, then the computer will return an 
 * 'undefined' statement
 */