const amountOfMatches = (db: any, identifier: number, keyword: string) => {
  let result: number = 0;
  let regex = new RegExp(keyword, "i");
  for (let i = 0; i < db.length; i++) {
    if (db[i].getByIndex(identifier).match(regex, "i")) {
      result++;
    }
  }
  return result;
};

module.exports = amountOfMatches;
