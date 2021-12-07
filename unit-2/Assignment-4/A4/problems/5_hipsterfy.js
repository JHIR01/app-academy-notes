/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/

function removeLastVowel(word){
  var vowels = 'aAeEiIoOuU';
  var letters = word.split('');
  for(var i = letters.length -1; i >= 0; i--){
    if(vowels.indexOf(letters[i]) !== -1){
      letters[i] = '';
      var newWord = letters.join('');
      return newWord;
    }
  }
  return word;
}

function hipsterfy(sentence) {
  var words = sentence.split(' ');
  var newWords = [];
  for(var i = 0; i < words.length; i++){
    newWords.push(removeLastVowel(words[i]));
  }
  var newSent = newWords.join(' ');
  return newSent;
}

console.log(hipsterfy("proper"));
console.log(hipsterfy("proper tonic panther"));
console.log(hipsterfy("towel flicker banana"));
console.log(hipsterfy("runner anaconda"));
console.log(hipsterfy("turtle cheeseburger fries"));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
