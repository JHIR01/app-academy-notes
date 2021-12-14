/**
 * function that accepts a string of uppercase letters. The function should return the length of the longest 
 * consecutive streak of the letters 'P' and 'Q'.
 */

function mindPsAndQs(str){
    var  longestStreak = 0;
    var currentStreak = 0;
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        if(char === 'P' || char === 'Q'){
            currentStreak++;
        } else if(currentStreak > longestStreak) {
            longestStreak = currentStreak;
            currentStreak = 0;
        } else {
            currentStreak = 0;
        }
        if(i === str.length -1 && currentStreak > longestStreak){
            longestStreak = currentStreak;
        }
    }
    return longestStreak;
}

console.log(mindPsAndQs('BOOTCAMP'));
console.log(mindPsAndQs('APCDQQPPC'));
console.log(mindPsAndQs('PQPQ'));
console.log(mindPsAndQs('PPPXQPPPQ'));