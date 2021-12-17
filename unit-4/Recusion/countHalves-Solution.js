/**
 * Write a recursive function 'countHalves(n)' that takes in a number and 
 * prints n, n/2, n/4, n/8, n/16, and so on. This process should stop
 * once the result goes below 1. It should print 'done!' upon going below 1.
 */

function countHalves(n){
    if(n < 1){ // base case
        console.log('done');
    } else { // recursive case
        console.log(n);
        countHalves(n /2);
    }
}

countHalves(100);