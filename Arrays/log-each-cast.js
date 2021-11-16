/**
 * function that will take in an array and prints all the elements
 * within it along with the indicies of the elements
 */
var names = ["Jacob", "Cj", "Mel", "Jeff"];
function logEach(arr){
    for(var i = 0; i <= arr.length; i++){
        console.log("Name: " + arr[i] + ", Index: " + i);
    }
}
logEach(names);