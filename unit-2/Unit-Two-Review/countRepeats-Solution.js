/**
 * Function that takes in a string and returns the number of letter that appear more than once in the string.
 * Assume the string contains only lowercase letters. Count the number of letters that repeat, not the number
 * of times they repeat in the string.
 */

function charCount(string){
    var count = {};
    for(var i = 0; i < string.length; i++){
        var char = string[i];
        if(count[char] === undefined){ // if the character is in the key in the object
            count[char] = 1;
        } else {
            count[char] += 1;
        }
    }
    return count;
}

function countRepeats(string){
    var count = charCount(string);
    var numRepeats = 00;
    for(var letter in count){
        var letterCount = count[letter];
        if(letterCount > 1){
            numRepeats++;
        }
    }
    return numRepeats;
}

console.log(countRepeats('alvin'));
console.log(countRepeats('aaaalvin'));
console.log(countRepeats('pops'));
console.log(countRepeats('mississippi'));
console.log(countRepeats('hellobootcampprep'));