/**
 * function that takes in a min and a max and print out all numbers from max to min (exclusive), in reverse order
 */
function printReverse(min, max){
    for(var i = max - 1; i > min; i--){
        console.log(i);
    }
}

printReverse(1,20);