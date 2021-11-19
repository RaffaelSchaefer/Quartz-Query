const convert  = require("./util/convertCSVtoJSON.js")

convert("./src/db/csv/mineral_data_german_211119.csv","src/db/json","mineral_data_german_211119.json").then().catch();