/*******************************************************************************
Write a function shortestWord(sentence) that returns the shortest word of a sentence.
You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') => 'is'
shortestWord('bootcamp prep') => 'prep'
*******************************************************************************/

function shortestWord(sentence) {
  var words = sentence.split(' ');
  var shortest = null;
  for(var i = 0; i < words.length; i++){
    if(shortest === null || shortest.length > words[i].length){
      shortest = words[i];
    }
  }
  return shortest;
}

console.log(shortestWord('app academy is cool'));
console.log(shortestWord('bootcamp prep'));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = shortestWord;
