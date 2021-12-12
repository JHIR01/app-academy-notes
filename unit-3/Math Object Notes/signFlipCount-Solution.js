/**
 * function that takes in an array of numbers as arguements. The function should retun the number of times adjacent numbers 
 * in the array switch signs from positive to negative or vice versa. The number 0 is neither positive nor negative.
 */
function isOpposite(num1, num2){
    if((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)){
        return true;
    } else {
        return false;
    }
}
function signFlipCount(array){
    var count = 0;
    for(var i = 0; i < array.length; i++){
        if(isOpposite(array[i], array[i + 1])){
            count++;
        }
    }
    return count;
}
console.log(signFlipCount([5,6,10,3]));
console.log(signFlipCount([-12,0,-3,-5]));
console.log(signFlipCount([-12,10,-3,-5]));
console.log(signFlipCount([1,-2,-3,-4]));
console.log(signFlipCount([-1,11.3,-3,100]));