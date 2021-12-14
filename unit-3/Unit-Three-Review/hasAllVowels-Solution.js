/**
 * function that takes in a string and returns true of the string contains every vowel (aeiou) and false otherwise
 */

function hasAllVowels(str){
    var vowels = 'aeiou'.split('');
    for(var i = 0; i < vowels.length; i++){
        var vowel = vowels[i];
        if(str.indexOf(vowel) === -1){
            // if the vowel is not in the string
            return false;
        }
    }
    return true;
}

console.log(hasAllVowels('have you gone biking?'));
console.log(hasAllVowels('get out of the way, silly'));
console.log(hasAllVowels('bootcamp prep'));
console.log(hasAllVowels('hello world'));