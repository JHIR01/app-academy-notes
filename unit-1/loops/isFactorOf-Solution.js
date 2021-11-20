/**
 * function to determine whether or not a number is a function of another number
 */
// function isFactorOf(number, factor){
//     if(number % factor === 0){
//         return true;
//     } else {
//         return false;
//     }
// }

//console.log(ifFactorOf(6,2));

/**
 * Here is another way to build the function
 */
function isFactorOf(number, factor){
    return number % factor === 0;
}

console.log(isFactorOf(-6,2));