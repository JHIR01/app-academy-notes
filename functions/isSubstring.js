/**
 * function that takes in two string: 'searchString' and
 * 'subString'. The fucntion should return 'true' if 
 * 'subString' is a part of the 'searchString', 'false'
 * otherwise.
 */

function isSubString(str, subStr){
    var tempStr = str.toLowerCase();
    var tempSubStr = subStr.toLowerCase();
    if(tempStr.indexOf(tempSubStr) > -1){
        return true;
    }else{
        return false;
    }
}

console.log(isSubString("The cat went to the store", "the cat went"));
console.log(isSubString("Time to program", "time"));
console.log(isSubString("Jumpy for joy", "joys"));