/**
 * function that takes in an array of numbers as an arguement
 * and returns all pairs of nunmber that sum to 0. Assume that
 * all the numbers inthe given array are unique. The function
 * should return an array that contains pairs, a single pair
 * is array of length 2.
 */
function pairZero(array){
    var pairs = [];
    for(var i = 0; i < array.length; i++){
        for(j = i + 1; j <array.length; j++){ // to make sure there are no duplicates, we add one to the counter in the second group
            var num1 = array[i];
            var num2 = array[j];
            if(num1 + num2 === 0){
                pairs.push([num1, num2]);
            }
        }
    }
    return pairs;
}

console.log(pairZero([4, 1, 0]));
console.log(pairZero([1, 2, -1]));
console.log(pairZero([0, 2, 5, -2, 7, -7]));