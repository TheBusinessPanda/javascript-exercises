const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, num) => sum + num, 0)
};

const multiply = function (arr) {
  return arr.reduce((prod, num) => prod * num, 1)
};

const power = function (base, expo) {
  return (base ** expo);
};

const factorial = function (num) {
  let numList = [];
  for (let i = 1; i <= num; i++) {
    numList.push(i);
  }

  return numList.reduce((prod, num) => prod * num, 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
