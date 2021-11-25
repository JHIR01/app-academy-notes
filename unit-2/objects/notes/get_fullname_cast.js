/**
 * Function that takes in a person object and returns a string containing their full name. 
 */

var p1 = {firstName: 'John', lastName: 'Doe'}
var p2 = {firstName: 'Charlie', lastName: 'Brown'}

function getFullName(person){
    var fName = person.firstName;
    var lName = person.lastName;

    var fName = person['firstName'];
    var lName = person['lastName'];

    return fName + " " + lName;
}

console.log(getFullName(p1));
console.log(getFullName(p2));