/**
 * function that takes in an array of assessment objects. The function should return a
 * true if the average assessment score is at least 70. 
 */

var assessments1 = [
    {number: 1, score: 60},
    {number: 2, score: 90},
    {number: 3, score: 80},
    {number: 4, score: 100},
    {number: 5, score: 85}
];

var assessments2 = [
    {number: 1, score: 60},
    {number: 2, score: 20},
    {number: 3, score: 45}
]

function isPassing(assessments){
    var total = 0; 
    for(var i = 0; i < assessments.length; i++){
        var assessment = assessments[i];
        total += assessment.score;
    }
    avg = total/assessments.length;
    return avg >= 70;
}

console.log(isPassing(assessments1));
console.log(isPassing(assessments2));