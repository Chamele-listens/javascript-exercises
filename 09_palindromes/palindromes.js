const palindromes = function (string) {
    let punctuation = /[\.,?!]/g;
    let reverseString = string.replace(punctuation,"").split("").reverse().join("").toLowerCase().split(" ").join("")
    console.log(reverseString)

    if (string.replace(punctuation,"").toLowerCase().split(" ").join("") === reverseString){
        return true
    }else{
        return false
    }
};
console.log(palindromes("A car, a man, a maraca."))

// Do not edit below this line
module.exports = palindromes;
