/**
 * function that takes in a sentence and returns an array containing every other word in that sentence.
 */
function everyOtherWord(sentence){
    var newArr = [];
    var tempArr = sentence.split(" ");
    for(var i = 0; i < tempArr.length; i++){
        if(i % 2 === 0){
            newArr.push(tempArr[i]);
        }
    }
    return newArr;
}

console.log(everyOtherWord("This is a mildy long sentence that I wrote."));