/**
 * Multidimensional arrarys are arrays that hold arrays inside them.
 */
var teachers = [
    ['Ali', 'Alex', 'Mike', 'Oscar'],
    ['Megan', 'Tassos'],
    ['Maurice', 'Daniel', 'Tommy']
];
// this is how to get an array out of an array
console.log(teachers);
console.log(teachers[0]);
console.log(teachers[1]);
console.log(teachers[2]);

// how to get an item out of the inner array
console.log(teachers[1][1]);
// OR
var inner = teachers[1];
console.log(inner[1]);

// a function to iterate through a 2D array
function print2D(array){
    for(var i = 0; i < array.length; i++){
        var subArray = array[i];
        console.log(subArray);
        for(var j = 0; j < subArray.length; j++){
            var ele = subArray[j];
            console.log(ele);
        }
    }
}

function print2D2(array){
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){
            console.log(array[i][j]);
        }
    }
}

print2D(teachers);
console.log(" ");
print2D2(teachers);