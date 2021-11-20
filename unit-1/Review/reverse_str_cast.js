/**
 * function that takes in a string as a parameter and returns the string but with characters in reverse.
 */
function reverseString(str){
    var reverse = '';
    for(var i = str.length -1; i >= 0 ; i--){
        var char = str[i];
        reverse += char;
    }
    return reverse;
}

console.log(reverseString('bootcamp'));