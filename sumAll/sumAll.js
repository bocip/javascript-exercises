const sumAll = function (first, second) {
    let result = 0;

    if (first < 0 || second < 0 || isNaN(first) || isNaN(second) || typeof second === "string") {
        result = "ERROR";

    } else if (first < second) {
        for (let i = first; i <= second; i++) {
            result += i;
        }
    } else if (first > second) {
        for (let i = second; i <= first; i++) {
            result += i;
        }
    }
    return result;

}

module.exports = sumAll


// have two arguments
// the firsty one will be the start of the loop
//from then it will add the next one