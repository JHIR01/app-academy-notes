/**
 * function that return an array that contains all numbers between 
 * 'start' and 'end' in sequantial order.
 */

function range(start, end){
    var tempArray = [];
    for(var i = start; i <= end; i++){
        tempArray.push(i);
    }
    return tempArray; // this will log the objects in a list format
}

console.log(range(1,4));
console.log(range(4,2));// this won't work or it won't put any-
// thing in the array
console.log(range(-10,42));