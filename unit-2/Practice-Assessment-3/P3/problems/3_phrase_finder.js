/*******************************************************************************
Write a function phraseFinder(words, phrase), that takes in an array of words and a
string representing a phrase. The function should return true if the phrase can be
formed by a pair of words from the array. The function should return false if the
phrase cannot be formed by any pair of words.

Examples:

phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye') => false
*******************************************************************************/

function phraseFinder(words, phrase){
  var c1 = null;
  var c2 = null;
  var pWords = phrase.split(' ');
  for(var i = 0; i < pWords.length; i++){
    for(var j = 0; j < words.length; j++){
      if(pWords[i] === words[j]){
        if(c1 === true){
          c2 = true;
        } else {
          c1 = true;
        }
      }
    }
  }
  if(c1 === true && c2 === true){
    return true;
  } else {
    return false;
  }
}

function phraseFinder(words, phrase){
  for(var i = 0; i < words.length; i++){
    var word1 = words[i];
    for(var j = 0; j < words.length; j++){
      var word2 = words[j];
      var currentPhrase = word1 + ' ' + word2;
      if(currentPhrase === phrase){
        return true;
      }
    }
  }
  return false;
}

console.log(phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep'));
console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep'));
console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world'));
console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep'));
console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye'));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = phraseFinder;
