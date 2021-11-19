const convert  = require("./util/convertCSVtoJSON.js")

convert("./source/db/mineral_data_german_211119.csv","source/db","mineral_data_german_211119.json").then().catch();