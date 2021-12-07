/**
 * function that returns the lowest number which is a multiple of both num1 and num2
 */

function lcm(num1, num2){
    for(var i = 1; true; i++){ // even after the using the 'true' as an infinite loop for the condition statement the 
        // return stops the loop from continuing.
        // You could even use this: for(var i = 1; i <= num1 * num2; i++)
        if(i % num1 === 0 && i % num2 === 0){
            return i; 
        }
    }
}

/**
 * Here is another way:
 * function lcm(num1, num2){
 *  var i = num1;
 *  while(true){
 *      if(i % num2 === 0){
 *          return i
 *      }
 *      i += num1;
 *  }
 * }
 */

console.log(lcm(2, 3));
console.log(lcm(6, 10));
console.log(lcm(24, 26));