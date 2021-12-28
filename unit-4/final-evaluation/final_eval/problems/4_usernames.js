/**************************************************************************************
Write a function `usernames(names)` that takes in an array of names. The function
should return an array containing the corresponding usernames. See the examples.

Examples:

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

Difficulty: Medium
*************************************************************************************/

function usernames(names) {
  var usernamesArr = [];
  for(var i = 0; i < names.length; i++){
    var nameSplit = names[i].split(' ');
    var firstName = nameSplit[0];
    var lastName = nameSplit[1];
    var tempUser = firstName[0].toLowerCase() + lastName.toLowerCase();
    usernamesArr.push(tempUser);
  }
  return usernamesArr;
}

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

console.log(usernames(names)); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = usernames;
