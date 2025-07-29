const reverseString = function(reverse) {
    let r = '';
    let size = String(reverse).length;

    let i;
    for (i = size - 1; i >= 0; i--) {
        let char = reverse[i];
        r = r + char;
    }

    return r;
};

// Do not edit below this line
module.exports = reverseString;
