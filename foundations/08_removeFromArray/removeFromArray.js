const removeFromArray = function (arr, ...removeItems) {
    let filteredArray = [];
    for (let item of arr) {
        if (!removeItems.includes(item)) {
            filteredArray.push(item);
        }
    }

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
