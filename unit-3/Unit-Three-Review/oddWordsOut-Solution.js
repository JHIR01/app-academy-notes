/**
 * function that takes in a sentence string and returns the sentence where words with an odd number of characters are removed
 */

function oddWordOut(sentence){
    var newWords = [];
    var words = sentence.split(' ');
    for(var i = 0; i < words.length; i++){
        var word = words[i];
        if(word.length % 2 === 0){
            newWords.push(word);
        }
    }
    var sen = newWords.join(' ');
    return sen;
}

console.log(oddWordOut('go to the store and buy milk'));
console.log(oddWordOut('What is the answer'));