const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; ++i) {
        sum += numbers[i];
    }

    return sum;
};

const multiply = function(numbers) {
    let mul = 1;
    for (let i = 0; i < numbers.length; ++i) {
        mul = mul * numbers[i];
    }

    return mul;
};

const power = function(a, b) {
    if (b == 0) {
        return 1;
    }

    return a * power(a, b - 1);
};

const factorial = function(a) {
    if (a == 0) {
        return 1;
    }

    return a * factorial(a - 1);
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
