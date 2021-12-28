/**
 * Given a string of letters representing cardinal directions, each letter in the string
 * being a direction taken, determine weather or not the directions return to the initial
 * point/origin.
 */
function cardinalOrigin(str){
    var directionValues = {
        n: 1,
        e: 1,
        s: -1,
        w: -1
    };
    var displacement = 0;
    for(var i = 0; i < str.length; i++){
        displacement += directionValues[str[i]]
    }
    if(displacement === 0){
        return true;
    } else {
        return false;
    }
}

console.log(cardinalOrigin('nnss'));
console.log(cardinalOrigin('nesw'));
console.log(cardinalOrigin('nneessww'));