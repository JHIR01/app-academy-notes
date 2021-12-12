/**
 * Function that takes in ana array of words. The function should return a string representing the variable name
 * and obtained by combining the words and capitilizing them in mixCased style
 */

function variableNamify(words){
    var newWords = [];
    for(var i = 0; i < words.length; i++){
        var word = words[i];
        if(i === 0){ // if this is the first word, then lower-case it 
            newWords.push(word.toLowerCase());
        } else { // capitalize it 
            var firstChar = word[0].toUpperCase();
            var rest = word.slice(1).toLowerCase();
            newWords.push(firstChar + rest);
        }
    }
    var newName = newWords.join('');
    return newName;
}

console.log(variableNamify(['is', 'prime']));
console.log(variableNamify(['remove', 'last', 'vowel']));
console.log(variableNamify(['MaX', 'VALUE']));