/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence){
  var words = sentence.split(" ");
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

console.log(royalWe("I want to go to the store"));
console.log(royalWe("This is my house and toy will respect me"));
console.log(royalWe("This is mine"));
console.log(royalWe("Jump for my love"));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
