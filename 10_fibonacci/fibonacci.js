const fibonacci = function(num) {
    let fiboArr = [1,1]

    if (Number(num) === 0){
        return 0
    }

    if (num < 0){
        return "OOPS"
    }
    
    for (let i = 0; i < Number(num);i++){
        let sum = fiboArr[i] + fiboArr[i + 1]
        let FinalFibo = fiboArr.push(sum)
    }
    return fiboArr[num - 1];

};

// Do not edit below this line
module.exports = fibonacci;
