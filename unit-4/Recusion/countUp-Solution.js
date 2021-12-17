/**
 * Write a recursive function 'countUp(num)' that tajes in a number and
 * prints all whole numbers from 'num' to 10. It should print 'done!' upon
 * reaching 10 or greater. Do this recursively, without loops. Reference the
 * 'countdown' example from the recursion notes.
 */

function countUp(num){
    // base case
    if(num >= 10){
        console.log('done');
    } else { // recursive case
        console.log(num);
        countUp(num +1);
    }
}

countUp(-100);