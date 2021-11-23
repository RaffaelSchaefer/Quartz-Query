const conversion = require("./client/scripts/util/convertCSVtoJSON");
conversion(
  "../src/server/db/csv/mineral_data_german_211119.csv",
  "db/json",
  "mineral_data_german_211119.json"
)
  .then()
  .catch();
