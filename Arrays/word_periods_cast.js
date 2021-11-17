/**
 * function that takes in a sentence and returns a new sentence
 * where every word has a period after it.
 */
function wordPeriods(sentence){
    var words = sentence.split(' ');
    for(var i = 0; i < words.length; i++){
        var word = words[i];
        words[i] = word + '.';
    }
    var newSentence = words.join(' ');
    return newSentence;
}

console.log(wordPeriods('Hello world'));
console.log(wordPeriods('This is a sentence'))