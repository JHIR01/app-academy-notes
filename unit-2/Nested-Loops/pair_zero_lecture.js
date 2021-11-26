/**
 * Function that takes in an array of numbers as an arguement and returns
 * all pairs of number that sum to 0. Assume that all the number in the 
 * given array are unique. The function should return an array that contains
 * pairs, a single pair is an arrat of lenght 2.
 */
function pairZero(array){
    var pairs = [];
    for(var i = 0; i < array.length; i++){
        var num1 = array[i];
        for(var j = i + 1; j < array.length; j++){
            var num2 = array[j];
            if(num1 + num2 === 0){
                var pair = [num1, num2]
                pairs.push(pair);
            }
        }
    }
    return pairs;
}
 
console.log(pairZero([4, 1, 0]));
console.log(pairZero([0, 2, 5, -2, 7, -7]));
console.log(pairZero([1, 2, -1]));