/**
 * fix this function:
 * 
 * var magicify = function(number) {
  console.log(number - 34);
}

var isMagicNumber = function(number) {
  var magicNumb = magicify(number);

  if (magicNumb % 13 === 0 || magicNumb < 0) {
    return true;
  }

  return false;
}

isMagicNumber(26) //=> true;
isMagicNumber(50) //=> false;
 */

var magicify = function(number) {
    return number - 34;
  }
  
  var isMagicNumber = function(number) {
    var magicNumb = magicify(number);
  
    if (magicNumb % 13 === 0 || magicNumb < 0) {
      return true;
    }
  
    return false;
  }
  
  console.log(isMagicNumber(26)) //=> true;
  console.log(isMagicNumber(50)) //=> false;