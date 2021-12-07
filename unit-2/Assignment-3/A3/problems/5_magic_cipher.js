/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/

function replace(word, cipher){
  var letters = word.split('');
  for(var i = 0; i < letters.length; i++){
    for(var key in cipher){
      if(key === letters[i]){
        letters[i] = cipher[key];
      }
    }
  }
  var newWord = letters.join('');
  return newWord;
}

function magicCipher(sentence, cipher){
  var arr = [];
  var words = sentence.split(' ');
  for(var i = 0; i < words.length; i++){
    var word = words[i];
    var newWord = replace(word, cipher);
    arr.push(newWord);
  }
  var newSent = arr.join(' ');
  return newSent;
}

console.log(magicCipher("add me on facebook" , { a : "c", d : "q"}));
console.log(magicCipher("where are you?" , { v : "l", '?' : "!"}));
console.log(magicCipher("twmce" , { m : "n", t : "d", w : "a"}));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
