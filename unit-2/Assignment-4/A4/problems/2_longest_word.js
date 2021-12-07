/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  var words = sentence.split(' ');
  var longest = null;
  for(var i = 0; i < words.length; i++){
    if(longest === null || words[i] < longest){
      longest = words[i];
    }
  }
  return longest;
}

console.log(longestWord('app academy is cool'));
console.log(longestWord('hate having hungry hippos'));
console.log(longestWord('bootcamp'));
console.log(longestWord(''));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
