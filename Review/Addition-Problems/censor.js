/**
 * Write a function censor(sentence, curseWords) that censors
 * the given sentence by replacing the vowels in curse words 
 * with "". Assume no punctuation.

Examples:
var result1 = censor("Darn you Harold you son of a gun", "darn", "gun");
result1; => "Drn you Harold you son of a gn"

var result2 = censor("Schnikeys I dont give a diddly squat", "schnikeys", "diddly", "squat");
result2; => "Schnkys I dont give a dddly sq**t"
 */

function removeVowels(word){
    var vowels = 'aeiou'.split('');
    var newWord = '';
    for(var i = 0; i < word.length; i++){
        if(vowels.indexOf(word[i]) === undefined){
            newWord += word[i];
        }
    }
    return newWord;
}

function censor(sentence, curseWords){
    var newWords = [];
    var words = sentence.split(' ');
    for(var i = 0; i < words.length; i++){
        if(curseWords.indexOf(words[i]) > -1){
            var newWord = removeVowels(words[i]);
            newWords.push(newWord);        
        } else {
            newWords.push(words[i]);
        }
    }
    var newSent = newWords.join(' ');
    return newSent;
}

var result1 = censor("Darn you Harold you son of a gun", "darn", "gun");
console.log(result1); // => "Drn you Harold you son of a gn"

var result2 = censor("Schnikeys I dont give a diddly squat", "schnikeys", "diddly", "squat");
console.log(result2); // => "Schnkys I dont give a dddly sq**t"