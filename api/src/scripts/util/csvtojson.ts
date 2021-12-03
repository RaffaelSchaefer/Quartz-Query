const csv = require("csvtojson");
const fs = require("fs");

const convertCSVtoJSON = async (
  path: string,
  exportDir: string,
  exportFileName: string
) => {
  csv()
    .fromFile(path)
    .then((jsonObj: any) => {
      fs.writeFileSync(
        exportDir + "/" + exportFileName,
        JSON.stringify(jsonObj)
      );
      console.log(exportFileName + " was saved!");
    });
};

module.exports = convertCSVtoJSON;
