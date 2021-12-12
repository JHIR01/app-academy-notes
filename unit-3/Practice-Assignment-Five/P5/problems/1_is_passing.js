/*******************************************************************************
Write a function isPassing(assessments) that takes in an array of assessment objects.
The function should return a true if the average assessment score is at least 70.
It should return false otherwise.

Examples:

var assessments1 = [
  {number: 1, score: 60},
  {number: 2, score: 90},
  {number: 3, score: 80},
  {number: 4, score: 100},
  {number: 5, score: 85}
];

isPassing(assessments1) => true


var assessments2 = [
  {number: 1, score: 60},
  {number: 2, score: 20},
  {number: 3, score: 45}
];

isPassing(assessments2) => false
*******************************************************************************/

function isPassing(assessments) {
  var sum = 0;
  var avg = 0;
  for(var i = 0; i < assessments.length; i++){
    var obj = assessments[i];
    sum += obj.score;
  }
  avg = (sum/assessments.length);
  if(avg >= 70){
    return true;
  } else {
    return false;
  }
}

var assessments1 = [
  {number: 1, score: 60},
  {number: 2, score: 90},
  {number: 3, score: 80},
  {number: 4, score: 100},
  {number: 5, score: 85}
];

console.log(isPassing(assessments1));


var assessments2 = [
  {number: 1, score: 60},
  {number: 2, score: 20},
  {number: 3, score: 45}
];

console.log(isPassing(assessments2));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPassing;
