const sumAll = function (intA, intB) {
    let sum = 0;
    if (
        ((intA || intB) < 0) ||
        ((intA % 1 || intB % 1) !== 0) ||
        (typeof intA !== 'number' || typeof intB !== 'number')
    ) {
        return 'ERROR'
    } else if (intA < intB) {
        while (intA <= intB) {
            sum += intA;
            intA++;
        }
    } else {
        while (intB <= intA) {
            sum += intB;
            intB++;
        }
    }


    return sum;
};

// Do not edit below this line
module.exports = sumAll;
