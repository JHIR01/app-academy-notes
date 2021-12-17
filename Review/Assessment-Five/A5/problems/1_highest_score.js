/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

function getInitials(student){
  var studentName = student.name;
  var names = studentName.split(' ');
  var initials = names[0][0] + names[1][0];
  var studentID = student.id;
  return initials + studentID;
}

console.log(getInitials({name: 'Fred Sladkey', id: 256, score: 94}));
console.log({name: 'Fred Sladkey', id: 256, score: 94}.score);

function highestScore(students) {
  var bestSt = null;
  for(var i = 0; i < students.lenght; i++){
    if(students[i].score > bestSt.score || bestSt === null){
      bestSt = students[i];
    }
  }
  return getInitials(bestSt);
}

var students = [
  {name: 'Alvin Zablan', id: 128, score: -42},
  {name: 'Eliot Bradshaw', id: 32, score: 57},
  {name: 'Tommy Duek', id: 2, score: 99},
  {name: 'Fred Sladkey', id: 256, score: 94}
];
 
highestScore(students); //=> 'TD2'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
