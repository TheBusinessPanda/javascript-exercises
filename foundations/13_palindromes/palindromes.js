const palindromes = function (str) {
    const validVals = 'abcdefghigklmnopqrstuvwxyz123456789'
    let reversedStr = str.toLowerCase().split('').filter((char) => validVals.includes(char)).reverse().join('');
    let newStr = str.toLowerCase().split('').filter((char) => validVals.includes(char)).join('');

    return newStr === reversedStr
};

// Do not edit below this line
module.exports = palindromes;
