const getTheTitles = function(objects) {
    let i;
    let titles = [];

    for (i = 0; i < objects.length; ++i) {
        titles.push(objects[i].title);
    }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
