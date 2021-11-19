const fs = require("fs");

const convertCSVtoJSON = (path: string) => {
    try {
        const csv = fs.readFileSync(path, "utf-8");
        console.log(csv);
    } catch (err) {
        console.log(err);
    }
}

module.exports = convertCSVtoJSON;