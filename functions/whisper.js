/**
 * function that takes in a string and returns a "whispered"
 * cersion of that string
 */
function whisper(sentence){
    return "..." + sentence.toLowerCase() + "...";
}

console.log(whisper("Hey Anthony"));
console.log(whisper("YEA! that was fun"));