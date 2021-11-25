// Objects

// var obj = {};
// // dot 
// obj.name = "a/A"
// obj.age = 4;
// // bracket
// obj['food'] = 'pizza'; // when using brackets to create a pair, you'll have ton use a quote inside the bracket 

// var myObj = {};
// var myKey = 'name';

// myObj[myKey] = "Bootcamp Prep"; // you can only pass in a variable as a key with square brackets 
// myObj.myKey = "Bootcamp Prep";

// console.log(myObj);

// var dog = {};
// dog.name = 'Fido';
// console.log(dog);
// dog.age = 11
// console.log(dog);
// console.log(dog.age);

// var dog = {name: "Fido", age: 11}
// console.log(dog);

// var cat = {name: 'Whiskers', color: 'orange'}
// console.log(cat);
// cat.name = "Smokey";
// console.log(cat);
// cat.name += "!";
// console.log(cat);
// cat.color = "grey";
// console.log(cat);
// console.log(cat.age); // this will return an undefined because there is nothing listed or stated to give age 

// var cat = {
//     name: 'whiskers',
//     age: 2,
//     color: 'orange'
// };
// function printObj(obj){
//     for(var key in obj){
//         console.log(key + ' - ' + obj[key]);
//     }
// }
// printObj(cat); // one thing to note is that keys and or values will not iterate in order of when they were stated

var dog = {
    name: 'Fido',
    color: 'black',
    age: 3,
    favoriteFoods: ['Pizza', 'Meatballs'],
    bark: function(){
        console.log(this.name + " barks!");
    },
    printAge: function(){
        console.log(this === dog);
        console.log(this.name + " is " + this.age + " years old.");
    }
}

dog.bark();
dog.printAge();

// the 'this' keyword refers to the object that called the method

