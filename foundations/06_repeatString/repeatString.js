const repeatString = function (str, repeatNum) {
    if (repeatNum < 0) {
        return 'ERROR';
    } else {
        let repeatedString = '';
        for (let i = repeatNum; i > 0; i--) {
            repeatedString += str;
        }

        return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
