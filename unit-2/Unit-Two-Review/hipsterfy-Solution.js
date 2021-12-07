/**
 * function that takes a string containing several words as input. Remove the last vowel from each word
 */

function removeLastVowel(word){
    var vowels = 'aeiou'.split('');// you can also make an array but this will make an array 
    for(var i = word.lenght -1; i >= 0; i--){
        var char = word[i];
        if(vowels.indexOf(char) > -1){
            var newWord = word.slice(0, i) + word.slice(i + 1);
            return newWord;
        }
    }
    return word;
}

function hipsterfy(sentence){
    var words = sentence.split(' ');
    var hipWords = [];
    for(var i = 0; i < words.length; i++){
        var word = words[i];
        var hipWord = removeLastVowel(word);
        hipWords.push(hipWord);
    }
    var hipSentence = hipWords.join(' ');
    return hipSentence;
}

console.log(hipsterfy("proper"));
console.log(hipsterfy("proper tonic panther"));
console.log(hipsterfy("towel flicker banana"));
console.log(hipsterfy("runner anacanda"));
console.log(hipsterfy("turtle cheeseburger fries"));