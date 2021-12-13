/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function reverseWord(word){
  var newLetters = [];
  for(var i = word.length -1; i >= 0; i--){
    newLetters.push(word[i]);
  }
  var newWord = newLetters.join('');
  return newWord;
}

function isPalindrome(sentence) {
  var words = sentence.split(' ');
  for(var i = 0; i < words.length; i++){
    var word = words[i];
    // console.log(word, '-', reverseWord(word), i);
    if(words[i][word.length -1] !== reverseWord(word)){
      console.log(word, '-', reverseWord(word), i);
      return false;
    }
  }
  return true;
}

function isPalindrome(sentence){
  for(var i = 0; i < sentence.length; i++){
    var start = sentence[i];
    var last = sentence[sentence.length -1 -i]
    if(start !== last){
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('rats live on no evil star'));
console.log(isPalindrome('stella won no wallets'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello world'));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
//module.exports = isPalindrome;
