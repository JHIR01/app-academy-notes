/**
 * function that accepts a string of uppercase letters. The function should return the length of the longest 
 * consecutive streak of the letters 'P' and 'Q'.
 */

function mindPsAndQs(str){
    var longestStreak = 0;
    var currentStreak = 0;
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        if(char === 'P' || char === 'Q'){
            currentStreak++; 
        } else if(currentStreak > longestStreak) { // if the character is not either 'P' or 'Q' then break the
            // current steak and see whether or not it is longer than the longest steak.
            longestStreak = currentStreak;
            currentStreak = 0; // return the streak to 0 because you have found the longest and are now looking
            // to see if there is another steak in the string that is longer than the newest.
        } else {
            currentStreak = 0; // if the camparison results in no changes, change the current streak to be 0
            // and look for a new one that is longer
        }
        if(i === str.length -1 && currentStreak > longestStreak){ // this is for when you reach the end of the 
            // string and you need to check on whether or not the current is longer than the longest
            longestStreak = currentStreak;
        }
    }
    return longestStreak;
}

console.log(mindPsAndQs('BOOTCAMP'));
console.log(mindPsAndQs('APCDQQPPC'));
console.log(mindPsAndQs('PQPQ'));
console.log(mindPsAndQs('PPPXQPPPQ'));