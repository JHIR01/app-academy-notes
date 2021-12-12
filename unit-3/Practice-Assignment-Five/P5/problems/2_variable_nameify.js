/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/

function variableNameify(words) {
  var wordList = [];
  wordList.push(words[0].toLowerCase());
  for(var i = 1; i < words.length; i++){
    var newWord = firstCap(words[i]);
    wordList.push(newWord);
  }
  var name = wordList.join('');
  return name;
}

function firstCap(word){
  var letters = word.split('');
  var newLetters = [];
  for(var i = 0; i < word.length; i++){
    if(i === 0){
      var newLetter = letters[i].toUpperCase();
      newLetters.push(newLetter);
    } else {
      newLetters.push(letters[i].toLowerCase());
    }
  }
  var newWord = newLetters.join('');
  return newWord;
}

console.log(variableNameify(['is', 'prime']));
console.log(variableNameify(['remove', 'last', 'vowel']));
console.log(variableNameify(['MaX', 'VALUE']));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = variableNameify;
