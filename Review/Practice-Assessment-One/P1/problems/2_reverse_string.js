/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
reverseString("Jump,-jump-for-joy") => "joy-for-jump-Jump,"
*******************************************************************************/

function reverseString(string) {
  var reversed = [];
  var words = string.split('-');
  for(var i = words.length -1; i >= 0; i--){
    reversed.push(words[i]);
  }
  var newString = reversed.join('-');
  return newString;
}

console.log(reverseString("Go-to-the-store")); // => "store-the-to-Go"
console.log(reverseString("Jump,-jump-for-joy")); // => "joy-for-jump-Jump,"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseString;
