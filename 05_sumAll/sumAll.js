const sumAll = function(startNum,endNum) {

    if (typeof startNum !== "number" || typeof endNum !== "number"){
        return "ERROR"
    }

    if (startNum > endNum){
        let endNumTemp = startNum;
        startNum = endNum;
        endNum = endNumTemp;
    }

    if (startNum < 0 || endNum < 0){
        return "ERROR"
    }




    let numList = [];
    for (i = endNum - 1; i > startNum;i--){
        numList.push(i)
    }
    let numListSum = numList.reduce((a,b) => a + b,0);
    let totalSum = numListSum + startNum + endNum;
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
