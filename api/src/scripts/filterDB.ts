const AOM = require("./util/amountOfMatches");

// @ts-ignore
Object.prototype.getByIndex = function (index) {
  // @ts-ignore
  return this[Object.keys(this)[index]];
};

const filterDB = (db: any, identifier: string, keyword: string) => {
  let regex: RegExp = new RegExp(keyword, "i");
  switch (identifier) {
    case Object.keys(db[0])[0]:
      return filter(db, 0, keyword, regex);
    case Object.keys(db[0])[1]:
      return filter(db, 1, keyword, regex);
    case Object.keys(db[0])[2]:
      return filter(db, 2, keyword, regex);
    case Object.keys(db[0])[3]:
      return filter(db, 3, keyword, regex);
    case Object.keys(db[0])[4]:
      return filter(db, 4, keyword, regex);
    case Object.keys(db[0])[5]:
      return filter(db, 5, keyword, regex);
    case Object.keys(db[0])[6]:
      return filter(db, 6, keyword, regex);
    case Object.keys(db[0])[7]:
      return filter(db, 7, keyword, regex);
    case Object.keys(db[0])[8]:
      return filter(db, 8, keyword, regex);
    case Object.keys(db[0])[9]:
      return filter(db, 9, keyword, regex);
    case Object.keys(db[0])[10]:
      return filter(db, 10, keyword, regex);
    case Object.keys(db[0])[11]:
      return filter(db, 11, keyword, regex);
    default:
      console.log("ERROR: Unknown Identifiers");
      return JSON.parse("[]");
  }
};

function filter(db: any, identifier: number, keyword:string, regex: RegExp) {
  let aom: number = AOM(db, identifier, keyword); //Amount of Matches
  let cm: number = 0; //Current Match index
  let result: string = "[";
  for (let i = 0; i < db.length; i++) {
    if (db[i].getByIndex(identifier).match(regex, "i")) {
      cm++;
      result += JSON.stringify(db[i]);
      if (cm < aom) {
        result += ",";
      }
    }
  }
  result += "]";
  result = JSON.parse(result);
  return result;
}

module.exports = filterDB;
