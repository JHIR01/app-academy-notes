/*******************************************************************************
Write a function bigramArray(sentence) that takes in a sentence string and returns
the an array of containing all bigrams in the sentence. A bigram is a pair of
consecutive words of a sentence.

Examples:

bigramArray('today is a great day') => [ 'today is', 'is a', 'a great', 'great day' ]
bigramArray('bigrams are very useful') => [ 'bigrams are', 'are very', 'very useful' ]
*******************************************************************************/

function bigramArray(sentence) {
  var arr = [];
  var words = sentence.split(' ');
  for(var i = 0; i < words.length -1; i++){
    var first = words[i];
    var next = words[i +1];
    var bigram = first + ' ' + next;
    arr.push(bigram);
  }
  return arr;
}

console.log(bigramArray('today is a great day'));
console.log(bigramArray('bigrams are very useful'));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bigramArray;
