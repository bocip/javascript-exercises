const repeatString = function (string, number) {
    let result = string;
    if (number < 0) {
        return "ERROR";
    }

    let i = 0;
    while (i <= number) {
        return result.repeat(number);
        i++;
    }
}

module.exports = repeatString
