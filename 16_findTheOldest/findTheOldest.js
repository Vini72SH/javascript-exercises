function getAge(person) {
    const death =
        person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear();
    return death - person.yearOfBirth;
};


const findTheOldest = function(peoples) {
    let i, currentAge;
    let oldest = peoples[0];
    let oldestAge = getAge(peoples[0]);

    for (i = 1; i < peoples.length; ++i) {
        currentAge = getAge(peoples[i]);
        if (currentAge > oldestAge) {
            oldest = peoples[i];
            oldestAge = currentAge;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
