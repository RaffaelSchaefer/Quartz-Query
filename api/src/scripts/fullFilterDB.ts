const fullFilterDB = (db: any, keyword: string) => {
    let out: string = "[";
    let regex: RegExp = new RegExp(keyword, "i");
    for (let i = 0; i < 12; i++) {
        out += fullFilter(db, i, regex);
    }
    if (out != "[") {
        out = out.substring(0, out.length - 1);
        out += "]";
        return JSON.parse(out);
    }
};

function fullFilter(db: any, identifier: number, regex: RegExp) {
    let result: string = "";
    for (let i = 0; i < db.length; i++) {
        if (db[i].getByIndex(identifier).match(regex, "i")) {
            result += JSON.stringify(db[i])+",";
        }
    }
    return result;
}

module.exports = fullFilterDB;
