/**
 * function that takes in a strig as an arguement. The function should return the string where 'streaks' of consecutive characters
 * are collapsed to a single character.
 */

function collapseString(str){
    var collapsed = '';
    for(var i = 0;  i < str.length; i++){
        var char = str[i];
        var lastChar = collapsed[collapsed.length -1];
        if(char !== lastChar){
            collapsed += char;
        }
    }
    return collapsed;
}

console.log(collapseString('apple'));
console.log(collapseString('AAAaalviiiiin!'));
console.log(collapseString('hello   app academy'));