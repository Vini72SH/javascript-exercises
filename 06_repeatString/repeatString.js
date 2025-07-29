const repeatString = function(repeat, times) {
    if (times < 0) {
        return 'ERROR';
    }

    if (times === 0) {
        return '';
    }

    let sub = String(repeat);
    let s = String(repeat);

    for (let i = 1; i < times; ++i) {
        s = s + sub;
    }

    return s;
};

// Do not edit below this line
module.exports = repeatString;
