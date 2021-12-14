/**
 * function that taks in a single letter and a sentence string
 * the function would return the word in the sentence that contains
 * 'favoriteLetter' the most. If there are ties, return the word that 
 * appears the most.
 */

function letterCount(letter, word){
    var count = 0;
    for(var i = 0; i < word.length; i++){
        var char = word[i];
        if(letter === char){
            count++;
        }
    }
    return count;
}

// console.log(letterCount('p', 'sipped'));

function favoriteWord(favoriteLetter, sentence){
    var words = sentence.split(' ');
    var fave = '';
    for(var i = 0; i < words.length; i++){
        var word = words[i];
        if(letterCount(favoriteLetter, word) > letterCount(favoriteLetter, fave)){
            fave = word;
        }
    }
    return fave;
}

console.log(favoriteWord('p', 'sinful caesar sipped his snifter'));
console.log(favoriteWord('x', 'sinful caesar sipped his sniffer'));