const findTheOldest = function (peoples) {
    let ages = [];
    for (let people of peoples) {
        ages.push((people.yearOfDeath || 2026) - people.yearOfBirth)
    }

    const highestAgeIndex = ages.indexOf(Math.max(...ages));
    return peoples[highestAgeIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
