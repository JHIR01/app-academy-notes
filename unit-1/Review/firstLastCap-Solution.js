/**
 * function that takes in a setnence and retturns a new sentence where the first and last letters of each word is uppercase. all other characters should be lower-
 * case
 */
function firstLastCap(sentence){
    var words = sentence.split(" ");
    var newWords = [];
    
    for(var i = 0; i < words.length; i++){
        var word = words[i];
        var newWord = word.toLowerCase();
        var firstChar = newWord[0].toUpperCase();
        var lastChar = newWord[newWord.length -1].toUpperCase();
        newWord = firstChar + newWord.slice(1, -1) + lastChar;
        newWords.push(newWord);
    }
    var newSen = newWords.join(" ");
    return newSen;
}

console.log(firstLastCap("This is a setence."));
console.log(firstLastCap("hello bootcamp prep"));