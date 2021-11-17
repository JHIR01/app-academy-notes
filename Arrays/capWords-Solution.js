/**
 * function that will return all the words in an array to be 
 * capitalized
 */
function capWords(words){
    var newWords = [];
    for(var i = 0; i < words.length; i++){
        var word = words[i];
        var newWord = word.toUpperCase();
        newWords.push(newWord);
    }
    return newWords;
}

var words = ["Shoe", "Pants", "Money", "wallet"]

console.log(capWords(words));