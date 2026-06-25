let fibonacci = function (place) {
    let fibonacciSqn = [0, 1];
    let i = 1;

    if (place >= 0) {
        while (fibonacciSqn.length <= place) {
            fibonacciSqn.push(i);
            i = fibonacciSqn[fibonacciSqn.length - 2] + fibonacciSqn[fibonacciSqn.length - 1]
        }
    } else {
        return 'OOPS'
    }

    return fibonacciSqn[place];
};

// Do not edit below this line
module.exports = fibonacci;

//fibonacciSqn = [1, 1, 2, 3, ];