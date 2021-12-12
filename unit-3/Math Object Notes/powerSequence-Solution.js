/**
 * function that takes in two numbers, 'base' and 'length'. The function should return an array containing a power
 * sequence with the given 'length'. Assume that the 'length' is at least 1.
 * 
 * the first number of a power sequence begins with 'base'. The second number of the sequence us the product between
 * the first number and the base. The third number od the sequence i the product between the second number and the
 * base...
 */

function powerSequence(base, length){
    var seq = [base];
    while(seq.length < length){
        var last = seq[seq.length -1];
        var next = last * base;
        console.log('The last num was', last);
        console.log('The next num is', next);
        seq.push(next);
        console.log('-----');
    }
    return seq;
}

console.log(powerSequence(3,4));
console.log(powerSequence(2,6));
console.log(powerSequence(8,3));