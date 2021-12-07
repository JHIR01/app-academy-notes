/**
 * How to detect if a number is a prime number or not.
 * 
 * - first off, what is a prime number?
 *      - A prime number is a natuaral number greater than 1 that cannot be formed by multiplying
 *          two similar natrual numbers.
 * - what is a natural number?:
 *      - A number hreater than 1 that is not prime, but called a composite number.
 * - for example: 5 is not a prime number because it is only divisible by 1 and itself.
 */
function isPrime(num){
    if(num < 2){ // if a number is smaller than two than it is not a prime number
        return false;
    }
    for(var i = 2; i < num; i++){ // - the reason why i is two is becuase it is established that the 
        // number is already larger than 3 in the previous if statement
        // - this 'for-loop' is meant to be used for seeing what number is next to be divisible by the 
        // number itself.
        if(num % i === 0){ // if the number is divisible to the current i itteration then the number is not
            // a prime number  
            return false;
        }
    }
    return true; // if the number is greater than 2 and has no number to modulo a result of 0, the the 
    // number is a prime number.
}
console.log(' ');
console.log('== isPrime() function ==');

console.log(isPrime(5));
console.log(isPrime(50));



/**
 * How to make an object in a function
 * 
 * - depending on the what the object's purpose is, making an object out of a function can varry. In this 
 *      case, we'll make an object that holds a number of how many are in an array.
 */
function elementCount(array){
    var count = {}; // initialize the object that will hold information
    for(var i = 0; i < array.length; i++){ // In this case, making a 'for-loop' to take in everything 
        // in the array is the best option to get everything in the array into an object
        var key = array[i]; // this will take the item at 'i' in the array and put it into a key
        if(count[key] === undefined){ // that key will now be checked to see if there is another key in 
            // the count of the same name.
            count[key] = 1; // if this kay doesn't already exit in the array, then add the key to the 
            // object as a property and give it a value of 1
        } else {
            count[key]++; // if the key already exits then add a value of 1 to indicate that it already 
            // exits
        }
    }
    return count; // return how many of each property there is.
}

console.log(' ');
console.log('== elementCount() function ==');

var array1 = ['a', 'a', 'b', 'b'];
var array2 = ['c', 'a', 'c', 'a', 'b'];

console.log(elementCount(array1));
console.log(elementCount(array1));

/**
 * How to do the previous function with a while loop
 */
function elementCountWhile(array){
    var count = {};
    var i = 0;
    while(i < array.length){
        var key = array[i];
        if(count[key] === undefined){
            count[key] = 1;
        } else {
            count[key]++;
        }
        i++; // remember to put an incrementer at the end of the while loop to avoid 
        // a never ending loop.
    }
    return count;
}

console.log(' ');
console.log('== elementCountWhile() function ==');

var array1 = ['a', 'a', 'b', 'b'];
var array2 = ['c', 'a', 'c', 'a', 'b'];

console.log(elementCountWhile(array1));
console.log(elementCountWhile(array1));

/**
 * How to identify or look for something in a string:
 * 
 * - for identify if something exits in either a string or an object, you'll have to compare the objects in both
 * - In this case, we'll be looking at removeing times at the end of some strings, and removing items in a string
 *      all together.
 */
function idPunctuation(string){
    var puncs = '.!,?:;-'.split('');
    // using split like this will allow the puncs to create an array of items in which each character of the string
    // is indivisualized and place in the array as it's element
    var lastChar = string[string.length -1];
    // 'lastChar' carries the last character of the string whichs is meant to be something from the 'puncs' array
    if(puncs.indexOf(lastChar) !== -1){
        // the 'if statment' is meant to check is the last element of the string exits as on of the elements in the array.
        // the '!== -1' means, not equal to the number '-1', which is an indication of something not exisiting in the array
        return lastChar; // return the last character that is a punctuation 
    } else {
        return string; // return the string if there is no punctuation.
    }
}

console.log(' ');
console.log('== idPunctuation ==');
console.log(idPunctuation('This!'));
console.log(idPunctuation('This'));

/**
 * How to get rid of an character in a string form a given array:
 * 
 * - similar to the last example, but now we are getting rid of all elements in in a string within a given array.
 */
function removeVowels(string){
    var vowels = 'aeiou'.split('');
    var characters = string.split('');
    for(var i = 0; i < characters.length; i++){
        var char  = character[i];
        if(vowels.indexOf(char) !== -1){

        }
    }
}

function idVowels(word){
    var vowels = 'aeiou'.split('');
    var letters = word.split('');
    for(var i = 0; i < letters.length; i++){
        var letter = letters[i];
        if(vowels.indexOf(letter) !== -1){
            var newWord = word.slice(0, i) + word.slice(i +1);
            return newWord;
        }
    }
    return word;
}

function removeVowels(string){
    var vowels = 'aeiou'.split('');
    var tempItem = string.split('');
    if(tempItem.indexOf(' ') !== -1){
        // var words = string.split(' ');
        console.log('Working on this');
    } else {
        idVowels(string);
    }
}

console.log(' ');
console.log('== removeVowels() function ==');

console.log(removeVowels('This'));