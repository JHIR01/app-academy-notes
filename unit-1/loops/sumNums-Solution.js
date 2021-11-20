/**
 * function that gets a number and returns the sum of al positive numbers less than or equal to max
 */
function sumNums(num){
    var total = 0;
    for(var i = num; i > 0; i --){
        total += i;
    }
    console.log(total);
}

sumNums(4);
sumNums(10);
sumNums(365);