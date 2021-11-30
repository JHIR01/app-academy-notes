var students3 = [
    {
        name: "Anthony",
        id: 0,
        grades: [{id: 0, score: 84}, {id: 1, score: 20}, {id: 2, score: 80}]
    }, 
    {
        name: "Winnie",
        id: 1,
        grades: [{id: 0, score: 62}, {id: 1, score: 56}, {id: 2, score: 100}]
    },
    {
        name: "Pawandeep",
        id: 2,
        grades: [{id: 0, score: 79}, {id: 1, score: 92}, {id: 2, score: 49}]
    }
];

/**
 * Function that will print the name of the student and their highest test score
 * - 'getBestScore' gets the best grade of the individual student
 * - 'printBestGrade' takes in the array of individuals and uses the 'getBestScore' function to get the 
 *      best score of the student.
 */

function getBestScore(student){
    var grades = student.grades;
    var max = null;
    for(var i = 0; i < grades.length; i++){
        var grade = grades[i];
        if(max === null || max < grade.score){
            max = grade.score;
        }
    }
    return max;
}

function printBestGrades(students){
    for(var i = 0; i < students.length; i++){
        var student = students[i];
        console.log(student.name, getBestScore(student));
    }
}

printBestGrades(students3);