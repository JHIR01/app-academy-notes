var students2 = [
    {name: "Anthony", id: 0},
    {name: "Winnie", id: 1},
    {name: "Pawandeep", id: 2}
];

/**
 * function that will print the name and id of all the students
 */

function printStudents(students){
    for(var i = 0; i < students.length; i++){
        var student = students[i];
        console.log(student.name, "is student #", student.id);
    }
};

printStudents(students2);