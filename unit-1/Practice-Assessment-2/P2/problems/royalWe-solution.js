/**
 * function that returns a string where every word
 * 'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
 * word 'my' is replaced with 'our', and every word 'me' is replaced with 'us'.
 */

function royalWe(sentence){
    var words = sentence.split(" ");
    var arrSen = [];
    for(var i = 0; i < words.length; i++){
        if(words[i] === 'I'){
            words[i] = 'we';
        }
        if(words[i] === 'mine'){
            words[i] = 'ours';
        }
        if(words[i] === 'my'){
            words[i] = 'our';
        }
        if(words[i] === 'me'){
            words[i] = 'us'
        }
    }
    var newSen = words.join(" ");
    return newSen;
}

console.log(royalWe("I want to go to the store."));
console.log(royalWe("This is my house and you will repsect me"));
console.log(royalWe("This is mine"));
console.log(royalWe("Jump for my love"));