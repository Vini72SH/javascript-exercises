const convertToCelsius = function(Fahrenheit) {
    let c = Math.round((Fahrenheit - 32) * (5 / 9) * 10) / 10;

    return c;
};

const convertToFahrenheit = function(Celsius) {
    let f = Math.round(((Celsius * 9) / 5 + 32) * 10) / 10;

    return f;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
