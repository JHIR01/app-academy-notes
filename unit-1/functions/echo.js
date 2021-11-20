/**
 * function that takes in a string and returns thats string
 * "echo-ized"
 */
function echo(str){
    return str.toUpperCase() + " ... " + 
    str + " ... " + str.toLowerCase();
}

console.log(echo("Mom!"));
console.log(echo("hey"));
console.log(echo("JUMp"));