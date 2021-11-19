const fs = require("fs");
const readline = require("readline");

const convertCSVtoJSON = async (path: string) => {
    const fileStream: any = fs.createReadStream(path);
    const rl: any = readline.createInterface({input: fileStream, crlfDelay: Infinity});
    let ID: number = -1;
    let types: string = "";
    let tmpOBJ: string = "";
    let out: string = "";
    for await (const line of rl) {
        if (ID <= -1) {
            types = line;
            types.split(",");
        } else {
            tmpOBJ = line;
            tmpOBJ.split(";");
            for (let i = 0; i < tmpOBJ.length; i++) {
                out += types[i]+": "+tmpOBJ[i];
            }
            console.log(out);
            console.log(`Line ${ID} from file: ${line}`);
        }
        ID++;
    }
}

module.exports = convertCSVtoJSON;