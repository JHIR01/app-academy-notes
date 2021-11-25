/**
 * function that prints out all key-values pairs of an 
 * object. HINT: use a for loop
 */
var bootcamp = {
    name: 'App Academy',
    color: 'Red',
    population: 120,
    program: ["bootcamp prep", "bootcamp"]
}

function printObject(obj){
    for(var key in obj){
        console.log(key + " - " + obj[key])
    }
}

printObject(bootcamp);