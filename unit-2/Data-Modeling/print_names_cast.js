var students1 = [
    {name: "Anthony"},
    {name: "Winnie"},
    {name: "Pawandeep"}
];

/**
 * function that will print the name of all students 
 */
function printNames(students){
    for(var i = 0; i < students.length; i++){
        var student  = students[i];
        console.log(student.name);// console.log(student['name']);
    }
}

console.log(printNames(students1));