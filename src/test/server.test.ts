const axios = require("axios");
const db_test = require("../server/db/json/mineral_data_german_211119.json");

test("The Api works", () => {
  expect(axios.get("http://localhost:8080/all")).toEqual(db_test);
});
