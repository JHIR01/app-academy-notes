/*******************************************************************************
Write a function hipsterfyWord(word) that takes takes in a string and returns
the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') => 'propr'
hipsterfyWord('tonic') => 'tonc'
hipsterfyWord('PANTHER') => 'PANTHR'
hipsterfyWord('BACKWARDS') => 'BACKWRDS'
*******************************************************************************/

function hipsterfyWord(word) {
  var vowels = 'aAeEiIoOuU'.split('');
  var letters = word.split('');
  for(var i = letters.length; i > 0; i--){
    if(vowels.indexOf(letters[i]) !== -1){
      letters[i] = '';
      var newWord = letters.join('');
      return newWord;
    }
  }
  return letters.push('');
}

console.log(hipsterfyWord('This'));
console.log(hipsterfyWord('tonic'));
console.log(hipsterfyWord('PANTHER'));
console.log(hipsterfyWord('BACKWARDS'));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfyWord;
