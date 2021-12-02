const AOM = require("./util/amountOfMatches");

// @ts-ignore
Object.prototype.getByIndex = function (index) {
  // @ts-ignore
  return this[Object.keys(this)[index]];
};

const filterDB = (db: any, identifier: string, keyword: string) => {
  switch (identifier) {
    case Object.keys(db[0])[0]:
      return filter(db, 0, keyword);
    case Object.keys(db[0])[1]:
      return filter(db, 1, keyword);
    case Object.keys(db[0])[2]:
      return filter(db, 2, keyword);
    case Object.keys(db[0])[3]:
      return filter(db, 3, keyword);
    case Object.keys(db[0])[4]:
      return filter(db, 4, keyword);
    case Object.keys(db[0])[5]:
      return filter(db, 5, keyword);
    case Object.keys(db[0])[6]:
      return filter(db, 6, keyword);
    case Object.keys(db[0])[7]:
      return filter(db, 7, keyword);
    case Object.keys(db[0])[8]:
      return filter(db, 8, keyword);
    case Object.keys(db[0])[9]:
      return filter(db, 9, keyword);
    case Object.keys(db[0])[10]:
      return filter(db, 10, keyword);
    case Object.keys(db[0])[11]:
      return filter(db, 11, keyword);
    default:
      console.log("ERROR: Unknown Identifiers");
      return JSON.parse("[]");
  }
};

function filter(db: any, identifier: number, keyword: string) {
  let aom: number = AOM(db, identifier, keyword); //Amount of Matches
  let cm: number = 0; //Current Match index
  let result: string = "[";
  if (aom >= 1) {
    result += "\n";
  }
  for (let i = 0; i < db.length; i++) {
    if (db[i].getByIndex(identifier) == keyword) {
      cm++;
      result += JSON.stringify(db[i]);
      if (cm < aom) {
        result += ",\n";
      } else {
        result += "\n";
      }
    }
  }
  result += "]";
  result = JSON.parse(result);
  return result;
}

module.exports = filterDB;
