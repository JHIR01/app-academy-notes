/**
 * Function that takes in an array of perosn objects. The function should return an array containing the names of 
 * those who have an age 18 or higher.
 */
var ppl = [
    {name: 'John', age: 20},
    {name: 'Jim', age: 13},
    {name: 'Jane', age: 18},
    {name: 'Bob', age: 7},  
    {name: 'Bill', age: 100}
]

function adults(ppl){
    var names = [];
    for(var i = 0; i < ppl.length; i++){
        var person = ppl[i];
        if(person.age >= 18){
            names.push(person.name);
            // or you culd use 'names.push(person['name']);'
        }
    }
    return names;
}

console.log(adults(ppl));