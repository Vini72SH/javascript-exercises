const removeFromArray = function(arr, ...remove) {
    let filterArr = [];

    let size = arr.length;
    for (let i = 0; i < size; ++i) {
        if (!(remove.includes(arr[i]))) {
            filterArr.push(arr[i]);
        }
    }

    return filterArr;
};

// Do not edit below this line
module.exports = removeFromArray;
