// Recusion

function sayHello(){
    console.log('hello');
    sayHello(); // this will run forever until our computer runs out of memory and the program will crash
}

sayHello();