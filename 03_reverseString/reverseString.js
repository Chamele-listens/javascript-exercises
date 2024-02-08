const reverseString = function(word) {
 const arrayWord = word.split("");
 const revWord = [];

 for (let i = arrayWord.length - 1; i >= 0; i--){
    const ValueAtIndex = arrayWord[i]
    revWord.push(ValueAtIndex)
 }
 return revWord.join("");
};

// Do not edit below this line
module.exports = reverseString;
