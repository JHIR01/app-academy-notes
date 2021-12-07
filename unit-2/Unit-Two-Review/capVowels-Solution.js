/**
 * function that takes in a string and returns the string where every vowel is capitalized. 
 * All other letters should be lowercased. 
 */

function capVowels(string){
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var newString = '';
    for(var i = 0; i < string.length; i++){
        var char = string[i];
        if(vowels.indexOf(char) > -1){
            newString += char.toUpperCase();
        } else {
            newString += char.toLowerCase();
        }
    }
    return newString;
}

console.log(capVowels('Hello world'));
console.log(capVowels('HELLO WORLD'));
console.log(capVowels('boOtCamP PreP'));