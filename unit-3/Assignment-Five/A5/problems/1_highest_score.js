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
  var name = student.name;
  var namesplit = name.split(' ');
  var fNI = namesplit[0][0];
  var lNI = namesplit[1][0];
  var stid = student.id;
  return fNI + lNI + stid;
}

function highestScore(students) {
  var highest = 0;
  var bestStu = '';
  for(var i = 0; i < students.length; i++){
    var tempSt = students[i];
    var score = tempSt.score;
    if(score > highest){
      highest = score;
      bestStu = getInitials(tempSt);
    }
  }
  return bestStu;
}

var students = [
  {name: 'Alvin Zablan', id: 128, score: -42},
  {name: 'Eliot Bradshaw', id: 32, score: 57},
  {name: 'Tommy Duek', id: 2, score: 99},
  {name: 'Fred Sladkey', id: 256, score: 94}
 ];
 
 console.log(highestScore(students));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
