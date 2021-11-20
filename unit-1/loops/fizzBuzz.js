/**
 * function that takes in a number that prints every number from 0 to 'max' that is divisible by either 3 or 5, but not both.
 */
function fizzBuzz(max){
    for(var i = 0; i < max; i+=1){
        if(i % 3 === 0 || i % 5 === 0){
            console.log(i);
        }
    }
}
/**
 * To solve a problem like this always thing about how to break it in to a smaller portion and how it can be built upon to make it closer to answer the 
 * overall question 
 */

fizzBuzz(20);