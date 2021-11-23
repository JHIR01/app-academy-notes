/*******************************************************************************
Write a function fromMeToYou(sentence) that returns an string where the word 'me'
is replaced with 'you'.

Examples:

fromMeToYou('that made me laugh') => 'that made you laugh'
fromMeToYou('love me or hate me') => 'love you or hate you'
*******************************************************************************/

function fromMeToYou(sentence) {
  var id = 'you';
  var words = sentence.split(" ");
  for(var i = 0; i < words.length; i++){
    if(words[i] === 'me'){
      words[i] = id;
    }
  }
  var newSen = words.join(" ");
  return newSen;
}

console.log(fromMeToYou('that made me laugh'));
console.log(fromMeToYou('love me or hate me'));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fromMeToYou;
