const conversion = require("./scripts/util/convertCSVtoJSON");
conversion("db/csv/mineral_data_german_211119.csv","db/json","mineral_data_german_211119.json").then().catch();