const sumAll = function(a, b) {
    if (a < 0 || b < 0) {
        return 'ERROR';
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }

    let min, max;

    if (a < b) {
        min = a;
        max = b;
    } else {
        min = b;
        max = a;
    }

    let result = ((max + min) * (max - min + 1)) / 2;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
