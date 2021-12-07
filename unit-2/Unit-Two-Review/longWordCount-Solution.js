/**
 * function that takes in a string and returns the number of words longer than 7 characters.
 */

function longWordCount(string){
    var counter = 0;
    var words = string.split(" ");
    for(var i = 0; i < words.length; i++){
        var word = words[i];
        if(word.length > 7){
            counter++;
        }
    }
    return counter;
}

console.log(longWordCount(""));
console.log(longWordCount("short word only"));
console.log(longWordCount("one reallylong word"));
console.log(longWordCount("two reallylong words inthisstring"));
console.log(longWordCount("allowrdword longwordword wordswordwor"));
console.log(longWordCount("seventy schfifty five"));