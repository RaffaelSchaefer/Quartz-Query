const convert  = require("./util/convertCSVtoJSON.js")

convert("./src/db/csv/mineral_data_german_211119.csv","src/db/json","mineral_data_german_211119.json").then().catch();
for (let i = 1; i <= 6; i++) {
    convert("./src/db/csv/mineral_literature_data_german_211119_"+i+".csv","src/db/json","mineral_literature_data_german_211119_"+i+".json").then().catch();
}