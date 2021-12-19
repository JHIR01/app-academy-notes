/**
 * Write a function stopWatch(totalSeconds) that takes in a 
 * number of seconds. The function should return the time based
 * on that number of seconds. The time should be formatted in 
 * hours (H), minutes (M), and seconds(S) in the form HH:MM:SS.
 */

function stopWatch(totalSeconds){
    var secCount = totalSeconds % 60;
    if(secCount < 10){
        secCount = '0' + secCount;
    }
    var minCount = Math.floor(totalSeconds / 60) % 60; 
    if(minCount < 10){
        minCount = '0' + minCount;
    }
    var hourCount = Math.floor(totalSeconds / 3600);
    if(hourCount < 10){
        hourCount = '0' + hourCount;
    }
    return hourCount + ':' + minCount + ':' + secCount;
}

 console.log(stopWatch(0));
 console.log(stopWatch(4));
 console.log(stopWatch(128));
 console.log(stopWatch(1234));
 console.log(stopWatch(3612));
 console.log(stopWatch(7640));
 console.log(stopWatch(86400));
 console.log(stopWatch(86522));
 console.log(stopWatch(99999));