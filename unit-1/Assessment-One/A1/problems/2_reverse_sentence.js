/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
  var tempArr = sentence.split(" ");
  var tempSen = [];
  for(var i = tempArr.length -1; i >= 0; i--){
    tempSen.push(tempArr[i]);
  }
  var newSen = tempSen.join(" ");
  return newSen;
}

console.log(reverseSentence("Go to the store"));
console.log(reverseSentence("Jump, jump for joy"));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
