const amountOfMatches = (db: any, identifier: number, keyword: string) => {
  let result: number = 0;
  for (let i = 0; i < db.length; i++) {
    if (db[i].getByIndex(identifier) == keyword) {
      result++;
    }
  }
  return result;
};

module.exports = amountOfMatches;
