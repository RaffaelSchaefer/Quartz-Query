const aOfMa = require("./amountOfMatches");

const getAmountOfMatches = (db: any, identifier: string, keyword: string) => {
    switch (identifier) {
        case Object.keys(db[0])[0]:
            return aOfMa(db, 0, keyword);
        case Object.keys(db[0])[1]:
            return aOfMa(db, 1, keyword);
        case Object.keys(db[0])[2]:
            return aOfMa(db, 2, keyword);
        case Object.keys(db[0])[3]:
            return aOfMa(db, 3, keyword);
        case Object.keys(db[0])[4]:
            return aOfMa(db, 4, keyword);
        case Object.keys(db[0])[5]:
            return aOfMa(db, 5, keyword);
        case Object.keys(db[0])[6]:
            return aOfMa(db, 6, keyword);
        case Object.keys(db[0])[7]:
            return aOfMa(db, 7, keyword);
        case Object.keys(db[0])[8]:
            return aOfMa(db, 8, keyword);
        case Object.keys(db[0])[9]:
            return aOfMa(db, 9, keyword);
        case Object.keys(db[0])[10]:
            return aOfMa(db, 10, keyword);
        case Object.keys(db[0])[11]:
            return aOfMa(db, 11, keyword);
        default:
            console.log("ERROR: Unknown Identifiers");
            return JSON.parse("{}");
    }
};

module.exports = getAmountOfMatches;