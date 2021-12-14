/**
 * function that takes in a sentence and removes all vowels, except the last vowels of every word.
 */

function indexOfLastVowel(word){
    var vowels = 'aeiou'.split('');
    for(var i = word.length -1; i >= 0; i--){
        var char = word[i];
        if(vowels.indexOf(char) > -1){
            // if char is a vowel
            return i;
        }
    }
}

// console.log(indexOfLastVowel('bootcamp'));
// console.log(indexOfLastVowel('panther'));
// console.log(indexOfLastVowel('anaconda'));

function reverseHipWord(word){
    var vowels = 'aeiou'.split('');
    var newWord = '';
    var lastVowelIdx = indexOfLastVowel(word);
    for(var i = 0; i < word.length; i++){
        var char = word[i];
        if(vowels.indexOf(char) === -1 || i === lastVowelIdx){
            newWord += char;
        }
    }
    return newWord;
}

// console.log(reverseHipWord('bootcamp'));

function reverseHipsterfy(sentence){
    var words = sentence.split(' ');
    var newWords = [];
    for(var i = 0; i < words.length; i++){
        var word = words[i];
        var newWord = reverseHipWord(word);
        newWords.push(newWord);
    }
    var newSent = newWords.join(' ');
    return newSent;
}

console.log(reverseHipsterfy('proper'));
console.log(reverseHipsterfy('proper tonic panther'));
console.log(reverseHipsterfy('bootcamp prep'));
console.log(reverseHipsterfy('turtle cheeseburger fries'));