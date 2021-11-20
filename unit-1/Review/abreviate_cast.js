/**
 * function that take in a sentence string and returns a new sentence where words longer than 4 characters have their vowels removed. Assume the sentence has 
 * all lowercase characters
 */
var vowels = ["a", "e", "i", "o", "u"]

function removeVowels(word){
    var newStr = '';

    for(var i = 0; i < word.length; i ++){
        var char = word[i];

        if(vowels.indexOf(char) === -1){
            // if the char is not a vowel
            newStr += char;
        }
    }

    return newStr;
}

console.log(removeVowels("however."));
console.log(removeVowels("Bootcamp"));

function abbreviate(sentence){
    var words = sentence.split(" ");
    var newWords = [];

    for(var i = 0; i < words.length; i++){
        var word = words[i];

        if (word.length > 4) {
            var newWord = removeVowels(word);
            newWords.push(newWord);
        } else {
            newWords.push(word);
        }
    }

    return newWords.join(" ");
}

console.log(abbreviate("This is a very long and annoying sentence."));