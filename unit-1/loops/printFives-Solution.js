/**
 * function that takes in a max number hat prints out multiples of 5 that are less than max.
 */
// function printFives(max){
//     for (var i = 0; i < max; i ++){
//         if(i % 5 === 0 ){
//             console.log(i);
//         }
//     }
// }

// second solution
 function printFives(max){
     for(var i = 0; i < max; i+= 5){
        console.log(i);
     }
 }
 /**
  * Whats interesting about this iteration is that everytime the 'for-loop' runs, it will automatically hit a factor of 5 and print it
  */

printFives(20);