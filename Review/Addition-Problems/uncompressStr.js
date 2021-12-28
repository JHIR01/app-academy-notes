/**
 * Write a function uncompressString(str) that takes in a "compressed" 
 * string and returns the "uncompressed" version of the string. 
 * In the input str, every letter is followed by a single digit number 
 * that specifies how many times that character is repeated. See the examples.
 * 
HINT: Use the built-in Number function to turn the string representation 
of a number into a number i.e. Number('42'); => 42;

Examples:
uncompressString('a2b4c1'); => 'aabbbbc'
uncompressString('b1o2t1'); => 'boot'
uncompressString('x3y1x2z4'); => 'xxxyxxzzzz'
 */
function uncompressString(str){
    var newStr = '';
    for(var i = 0; i < str.length; i += 2){
        var letter = str[i];
        var rep = str[i + 1];
        for(var j = rep; j >= 0; j--){
            newStr += letter;
        }
    }
    return newStr;
}

console.log(uncompressString('a2b4c1')); // => 'aabbbbc'
console.log(uncompressString('b1o2t1'));  // => 'boot'
console.log(uncompressString('x3y1x2z4')); // => 'xxxyxxzzzz'