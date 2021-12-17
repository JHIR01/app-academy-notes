// Recursion

function countDown(n){
    if(n === 0){ // base case
        console.log('liftoff!');
    } else { // recursive case
        console.log(n);
        countDown(n -1);
    }
}

// We use the base case to decide when we want to stop using the recursive case

countDown(10);