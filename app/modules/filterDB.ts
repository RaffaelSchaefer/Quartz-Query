/**
 * An extension of any Array to access their children by index
 * @param {number} index - index of the Object that should be returned
 * @returns A Object that matches the index
 */
// @ts-ignore
Object.prototype.getByIndex = function (index: number) {
    // @ts-ignore
    return this[Object.keys(this)[index]];
};

/**
 * @public
 * @summary This function searches the db for matching minerals.
 * @description This function searches the db for matching minerals. All tags will be used and every thing will be searched lowercase.
 * @function
 * @param db - The json file used to store the mineral data
 * @param keyword - The search term that will be used to search the array
 * @returns A array of matching minerals
 * @author Raffael Elias Schäfer
 */
function filterDB(db: any, keyword: string) {
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
}

/**
 * @private
 * @description Filtering db truth all tags
 * @function
 * @param db - db pass truth
 * @param identifier - tags represented via its index
 * @param regex - the search term as regex expression
 * @returns A subset of matching minerals
 * @author Raffael Elias Schäfer
 */
function fullFilter(db: any, identifier: number, regex: RegExp) {
    let result: string = "";
    for (let i = 0; i < db.length; i++) {
        if (db[i].getByIndex(identifier).match(regex, "i")) {
            result += JSON.stringify(db[i]) + ",";
        }
    }
    return result;
}

export default filterDB;