const fullAmountOfMatches = (db: any, keyword: string) => {
  let result: number = 0;
  let regex = new RegExp(keyword, "i");
  for (let y = 0; y < 12; y++) {
    for (let i = 0; i < db.length; i++) {
      if (db[i].getByIndex(y).match(regex, "i")) {
        result++;
      }
    }
  }
  return result;
};

module.exports = fullAmountOfMatches;
