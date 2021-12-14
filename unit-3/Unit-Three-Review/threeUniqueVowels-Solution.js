/**
 * function that takes in a string and returns true if the string contains at least three differenct vowels
 */

function threeUniqueVowels(string){
    var vowels = 'aeiou'.split('');
    var count = 0;
    for(var i = 0; i < vowels.length; i++){
        var vowel = vowels[i];
        if(string.indexOf(vowel) > -1){
            // if the vowel is inside th string
            count++;
        }
    }
    return count >= 3;
}

console.log(threeUniqueVowels('delicious'));
console.log(threeUniqueVowels('bootcamp prep'));
console.log(threeUniqueVowels('bootcamp'));
console.log(threeUniqueVowels('dog'));
console.log(threeUniqueVowels('go home'));