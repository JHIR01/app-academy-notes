/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
reverseString("Jump,-jump-for-joy") => "joy-for-jump-Jump,"
*******************************************************************************/

function reverseString(string) {
  var words = string.split("-");
  var tempSen = [];
  for(var i = words.length -1; i >= 0; i--){
    tempSen.push(words[i]);
  }
  var tempStr = tempSen.join("-");
  return tempStr;
}

console.log(reverseString("Go-to-the-store"));
console.log(reverseString("Jump,-jump-for-joy"));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseString;