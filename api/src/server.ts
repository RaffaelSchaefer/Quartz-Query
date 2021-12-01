const fDB = require("./scripts/filterDB");
const gAOM = require("./scripts/util/getAmountOfMatches");
const express = require("express");
const restAPI = express();
const cors = require("cors");
const db: any = require("../db/json/mineral_data_german_211119.json");
const PORT: number = 8080;

restAPI.use(express.json());
restAPI.use(cors());

restAPI.listen(PORT, () =>
  console.log(`Its alive on http://localhost:${PORT}`)
);

restAPI.get("/mineral", (req: any, res: any) => {
  res.status(200).send(db);
});

restAPI.get("/mineral/:id", (req: any, res: any) => {
  const { id } = req.params;
  if (0 < id < db.length) {
    res.status(200).send(db[id]);
  } else {
    res.status(404);
  }
});

restAPI.get("/mineral/filtered/:identifier/:keyword", (req: any, res: any) => {
  const { identifier, keyword } = req.params;
  res.status(200).send(fDB(db, identifier, keyword));
});

restAPI.get(
  "/mineral/filtered/:identifier/:keyword/:id",
  (req: any, res: any) => {
    const { identifier, keyword, id } = req.params;
    res.status(200).send(fDB(db, identifier, keyword)[id]);
  }
);

//FIX BUG
restAPI.get("/amount", (req: any, res: any) => {
  res.status(200).send(JSON.parse(`{"amount":${db.length}}`));
});

restAPI.get(
  "/mineral/amount/filtered/:identifier/:keyword",
  (req: any, res: any) => {
    const { identifier, keyword } = req.params;
    res
      .status(200)
      .send(JSON.parse(`{"amount":${gAOM(db, identifier, keyword)}}`));
  }
);
