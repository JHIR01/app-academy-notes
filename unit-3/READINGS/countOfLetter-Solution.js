/**
 * function that takes in a string and a character and returns the number of times that character appears in the string.
 */

function countOfLetter(string, char){
    var count = 0;
    for(var i = 0; i < string.length; i++){
        var currentChar = string[i].toLowerCase();
        if(currentChar === char){ // you can also do '.toLowerCase' on both of these variables to ge the correct response.
            count++;
        }
    }
    return count;
}

console.log(countOfLetter('mississippi', 's'));
console.log(countOfLetter('MISSISSIPPI', 'p'));
console.log(countOfLetter('BOOTCAMP', 't'));