/**
 * function that take in a string 'title' and an array of strings 'stopWords'.
 * Return the 'title' where every word that does not exist in the 'stopWords'
 * array is capitalized; all others lowercase.
 */

function isStopWord(word, stopWords){
    var noPuncWord = removePunc(word).toLowerCase();
    if(stopWords.indexOf(noPuncWord) > -1){
        return true;
    } else {
        return false;
    }
}

function capitalize(string){
    var firstChar = string[0];
    var everythingElse = string.slice(1);
    return firstChar.toUpperCase() + everythingElse.toLowerCase();
}

function removePunc(word){
    var punctuation = [';', '!', '.', '?', ',', '-'];
    var lastChar = word[word.length -1];
    if(punctuation.indexOf(lastChar) > -1){
        return word.slice(0, -1);
    } else {
        return word;
    }
}

function titleize(title, stopWords){
    var words = title.split(' ');
    var newWords = [];
    for(var i = 0; i < words.length; i++){
        var word = words[i];
        if(isStopWord(word, stopWords)){
            // if is a stop word, so lower case
            var lowerWord = word.toLowerCase();
            newWords.push(lowerWord);
        } else {
            // it is not a stop word, so capitalize
            var capWord = capitalize(word);
            newWords.push(capWord);
        }
    }
    return newWords.join(' ');
}

console.log(titleize("foest gump, the runner", ["the"]));
console.log(titleize("MASTER AND COMMANDER", ['and']));
console.log(titleize("i LOVE; lover of mine", ['love', 'of']));
console.log(titleize("shall we dance?", ['dance']));