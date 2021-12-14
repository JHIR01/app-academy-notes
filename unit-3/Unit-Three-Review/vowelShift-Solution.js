/**
 * function that takes in a sentence string. The function should return a new sentence, where 
 * every vowel is replaced with the next vowel in the alphabet.
 */

var vowels = 'aeiou'.split('');

function vowelShift(sentence){
    var nextVowel = {
        a: 'e',
        e: 'i',
        i: 'o',
        o: 'u',
        u: 'a' 
    };
    var newSen = '';
    for(var i = 0; i < sentence.length; i++){
        var char = sentence[i];
        if(nextVowel[char] === undefined){
            newSen += char;
        } else {
            newSen += nextVowel[char];
        }
    }
    return newSen;
}

// OR

function vowelShift(sentence){
    var newSen = '';
    for(var i = 0; i < sentence.length; i++){
        var char = sentence[i];
        var idx = vowels.indexOf(char);
        if(idx > -1){
            newSen += vowels[(idx +1) % 5];
        } else {
            newSen += char;
        }
    }
    return newSen
}

console.log(vowelShift('bootcamp'));
console.log(vowelShift('hello world'));
console.log(vowelShift('on the hunt'));