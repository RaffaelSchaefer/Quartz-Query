const fullFilterDB = (db: any, keyword: string) => {
    let out: string = "[";
    for (let i = 0; i < 12; i++) {
        out += fullFilter(db, i, keyword);
    }
    if (out.length > 1) {
        out = out.substring(0, out.length - 1);
    }
    out += "]";
    if (out != "[]") {
        return JSON.parse(out);
    }
};

function fullFilter(db: any, identifier: number, keyword: string) {
    let result: string = "";
    let regex = new RegExp(keyword, "i");
    for (let i = 0; i < db.length; i++) {
        if (db[i].getByIndex(identifier).match(regex, "i")) {
            result += JSON.stringify(db[i]);
            result += ",";
        }
    }
    return result;
}

module.exports = fullFilterDB;
