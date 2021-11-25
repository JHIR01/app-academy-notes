/**
 * function that returns a cat object
 * object with the corresponding properties.
 */
function catBuilder(name, color, toys){
    var cat = {} // you can either use dot-notation or the brackets
    cat.name = name;
    cat.color = color;
    cat.toys = toys;

    return cat;
}

var cat1 = catBuilder("Whiskers", "black", ["Stratching-post", "yarn"]);
console.log(cat1);
var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts'])
console.log(cat2);

/**
 * Another way to solve this is to declare the obj variable in the function and give the new object the function.
 * The function will return the variable and the outcome will be the same.
 */

/**
 * function catBuilder(name, color, toys){
 *  var cat = {
 *      name: name,
 *      color: color,
 *      toys: toys
 *  }
 * }
 */