/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
  var words = sentence.split(' ');
  var newWords = [];
  for(var i = words.length -1; i >= 0; i--){
    newWords.push(words[i]);
  }
  var newSent = newWords.join(' ');
  return newSent;
}

console.log(reverseSentence("Go to the store")); // => "store the to Go"
console.log(reverseSentence("Jump, jump for joy")); // => "joy for jump Jump,"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
