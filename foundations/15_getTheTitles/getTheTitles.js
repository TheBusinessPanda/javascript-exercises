const getTheTitles = function (books) {
    let titles = [];
    for (let auths of books) {
        titles.push(auths.title);
    }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
