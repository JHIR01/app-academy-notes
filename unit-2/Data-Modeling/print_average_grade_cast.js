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
 * function that will print the name of the students and their average test score
 */

function getAVG(student){
    var sum = 0;
    for(var i = 0; i < student.grades.length; i++){
        var grade = student.grades[i];
        sum += grade.score;
    }
    var avg = sum/student.grades.length;
    return avg;
}

function printAverageGrade(students){
    for(var i = 0; i < students.length; i++){
        var student = students[i];
        var avg = getAVG(student);
        console.log(student.name, avg);
    }
}

printAverageGrade(students3);