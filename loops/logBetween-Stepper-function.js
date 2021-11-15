/**
 * function to print a number between a min and a max with the condition to skip a certain amount between
 * the two.
 */
function logBetweenStepper(min, max, step){
    for(var i = min; i <= max; i += step){
        console.log(i);
    }
}

logBetweenStepper(5,9,1);
console.log(" ");
logBetweenStepper(-10,5,5);
console.log(" ");
logBetweenStepper(-9,9,3);