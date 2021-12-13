/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function isVowel(letter){
  var vowels = 'aeiouAEIOU';
  if(vowels.indexOf(letter) !== -1){
    return true;
  } else {
    return false;
  }
}

// console.log(isVowel('t'));

function disemvowel(string) {
  var noVowel = '';
  for(var i = 0; i < string.length; i++){
    if(isVowel(string[i]) === false){
      noVowel += string[i]
    }
  }
  return noVowel;
}

console.log(disemvowel('bootcamp')); // => 'btcmp'
console.log(disemvowel('PREP')); // => 'PRP'
console.log(disemvowel('hello world')); // => 'hll wrld'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
