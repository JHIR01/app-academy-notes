/**
 * function that takes in array of numbers. It should reuturn an array containing the idicies of all peaks.
 * A peak is an element that is greater than both of it's neighbots. If it  is the first or last element,
 * it is a peak if it is greater than its one neighbor. Assume the arrray has a length of at least 2
 */

function peakFinder(array){
    var peaks = [];
    for(var i = 0; i < array.length; i++){
        if(i === 0 && array[i] > array[i + 1]){ // if the peak is in the beginning
            peaks.push(i);
        } else if(i === array.length -1 && array[i] > array[i - 1]){ // if the peak is at the end
            peaks.push(i);
        } else if(array[i] < array[i - 1] && array[i] > array[i + 1]){ // if the peak is in the middle
            peaks.push(i);
        }
    }
    return peaks;
}

console.log(peakFinder([1, 2, 3, 2, 1]));
console.log(peakFinder([2, 1, 2, 3, 4, 5]));
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, 4, -4, 5]));