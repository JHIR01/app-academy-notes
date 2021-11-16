// var myArray = [];
// console.log(myArray); // this should just log '(0) []' because there
// // is nothing in the array as of right now 
// // method to put an item in the array
// myArray.push(42);
// console.log(myArray); // now this will log '(1) [42]' because there
// // is now an item in the array (index of 1 = "(1)") and 
// console.log(myArray[0]);
// myArray.push(100);
// console.log(myArray);
// myArray.push("Hello");
// console.log(myArray);
// console.log(myArray[2]);

// var names = ["Tommy", "Fred", "Mo"];
// console.log(names.length);
// names.push("Jacob");
// console.log(names.length);
// console.log(names);
// console.log(names[names.length -1]); // this will print the last item
// in the 'names' array

/**
 * One thing to always note about an Array is that they are always in
 * order, and their index always starts at 0.
 */

/**
 * Another thing you could do an array is change the value at a 
 * particular point of the index in the array
 */
// var people = ["Jacob", "CJ", "Jeff", "Mel"];
// console.log(people);
// console.log(people.length);
// console.log(people[1]);
// console.log(people.slice(1, 3));// returns whats in between the two
// // indicies in the array
// console.log(people.slice(1));// this takes out just the first index
// people.push("Oscar");
// people.push("Ali");
// console.log(people.slice(1, -1));// this gets rid of the elements in
// // the fron and at the end of the array
// /**
//  * think of negative numbers in that array as counting from the end
//  * to the beginning of the array
//  */
// var peopleslice = people.slice(1,-1);
// console.log(peopleslice);
// /**
//  * the 'peopleslice' an array that copied elements from a modified
//  * 'people' array
//  */

var people = ["Jacob", "Jeff", "CJ", "Mel"]
function printArray(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
printArray(people);
/**
 * This is a 'for-loop' that will print every element in the array
 */

function printArrayReverse(arr){
    for(var i = arr.length -1; i >= 0; i--){
        console.log(arr[i]);
    }
}
printArrayReverse(people)