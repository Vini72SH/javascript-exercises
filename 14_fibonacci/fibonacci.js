const fibonacci = function(n) {
    if (typeof n !== 'number') {
        n = parseInt(n);
    }

    if (n < 0) {
        return 'OOPS';
    }

    if (n <= 1) {
        return n;
    }

    let penult, ult, fib, cont;
    penult = 0;
    ult = 1;
    cont = 1;
    while (cont < n) {
        fib = ult + penult;
        penult = ult;
        ult = fib;
        cont++;
    }

    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
