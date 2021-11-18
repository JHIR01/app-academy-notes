/**
 * function that takes in a sentence string as input. It should return the sentence where every word has an exclamation point behind it,
 * except words that already have punctuation. Punctation makes are ". , ! ? ; ;"
 */
function endInPunc(str){
    var puncs = [",","?","!",";",":","."];
    lastChar = str[str.length -1];
    return (puncs.indexOf(lastChar) > -1);
}

function wordYeller(sentence){
    var words = sentence.split(" ");
    var newWords = [];

    for(var i = 0; i < words.length; i++){
        var word = words[i];
        if(endInPunc(word)){
            newWords.push(word);
        }else{
            var newWord = word + '!';
            newWords.push(newWord);
        }
    }

    var newSetnence = newWords.join(" ");
    return newSetnence;
}

console.log(endInPunc("bootcamp"));
console.log(endInPunc("bootcamp!"));

console.log(wordYeller("Stop it now! Please, won't you stop?"));