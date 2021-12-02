const fullAmountOfMatches = (db: any, keyword: string) => {
    let result: number = 0;
    for (let y = 0; y < 12; y++) {
        for (let i = 0; i < db.length; i++) {
            if (db[i].getByIndex(y) == keyword) {
                result++;
            }
        }
    }
    return result;
};

module.exports = fullAmountOfMatches;