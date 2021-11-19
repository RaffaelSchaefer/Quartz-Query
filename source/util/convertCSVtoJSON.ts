const fs = require("fs");

const convertCSVtoJSON = (path: string) => {
    let types: string[] = [];
    try {
        const tmp = fs.read(path, "utf-8");
    } catch (err) {
        console.log(err);
    }
}

module.exports = convertCSVtoJSON;