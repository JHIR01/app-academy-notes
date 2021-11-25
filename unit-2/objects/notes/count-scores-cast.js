/**
 * function that takes in an array of score objects (people) as its input.
 * A score object has two key-value pairs: a name (string) and a score (number). 
 * This function should return an object that has kay-value pairs where each 
 * name is a key and the value is their total score.
 */
function countScore(people){
    var  count = {};
    for(var i = 0; i < people.length; i++){
        var person = people[i];
        console.log("Current Person: " , person);
        if(count[person.name] === undefined){ // check if the name is not a key in the object
            count[person.name] = person.score;
        } else { // else the name is ALREADY a key inside the object
            count[person.name] += person.score;
        }
      console.log("Count obj after: " , count);
      console.log("=====");
    }
    return count;
}

var ppl = [
    {name: 'Anthony', score: 10},
    {name: 'Fred', score: 10},
    {name: 'Anthony', score: -8},
    {name: 'Winnie', score: 12}
];

var countPpl = countScore(ppl);
console.log(countPpl);