const express = require("express")();
const cors = require('cors');
const db: any = require("./db/json/mineral_data_german_211119.json");
const PORT: number = 8080;

express.use(cors());

express.listen(PORT, () =>
  console.log(`Its alive on http://localhost:${PORT}`)
);

express.get("/demo/single", (req: any, res: any) => {
  res.status(200).send({
    A_Code: "AgMin-Ag-1-1-19",
    Name: "Silber",
    Paragenese: "",
    Fundort: "Batopilas, Mexico",
    Ausbildung: "Zwillinge nach dem Spinellgesetz",
    Funddatum: "",
    Kaufdatum: "",
    Tauschdatum: "",
    Kauf_Tauschpreis: "",
    Wert_DM: "",
    Fotolink1: "",
    Fotolink2: ""
  });
});

express.get("/demo/multiple", (req: any, res: any) => {
  res.status(200).send([
    {
      A_Code: "AgMin-Ag-1-1-19",
      Name: "Silber",
      Paragenese: "",
      Fundort: "Batopilas, Mexico",
      Ausbildung: "Zwillinge nach dem Spinellgesetz",
      Funddatum: "",
      Kaufdatum: "",
      Tauschdatum: "",
      Kauf_Tauschpreis: "",
      Wert_DM: "",
      Fotolink1: "",
      Fotolink2: ""
    },
    {
      A_Code: "AgMin-Ag-1-1-19",
      Name: "Silber",
      Paragenese: "",
      Fundort: "Batopilas, Mexico",
      Ausbildung: "Zwillinge nach dem Spinellgesetz",
      Funddatum: "",
      Kaufdatum: "",
      Tauschdatum: "",
      Kauf_Tauschpreis: "",
      Wert_DM: "",
      Fotolink1: "",
      Fotolink2: ""
    },
    {
      A_Code: "AgMin-Ag-1-1-19",
      Name: "Silber",
      Paragenese: "",
      Fundort: "Batopilas, Mexico",
      Ausbildung: "Zwillinge nach dem Spinellgesetz",
      Funddatum: "",
      Kaufdatum: "",
      Tauschdatum: "",
      Kauf_Tauschpreis: "",
      Wert_DM: "",
      Fotolink1: "",
      Fotolink2: ""
    }, {
      A_Code: "AgMin-Ag-1-1-19",
      Name: "Silber",
      Paragenese: "",
      Fundort: "Batopilas, Mexico",
      Ausbildung: "Zwillinge nach dem Spinellgesetz",
      Funddatum: "",
      Kaufdatum: "",
      Tauschdatum: "",
      Kauf_Tauschpreis: "",
      Wert_DM: "",
      Fotolink1: "",
      Fotolink2: ""
    },
    {
      A_Code: "AgMin-Ag-1-1-19",
      Name: "Silber",
      Paragenese: "",
      Fundort: "Batopilas, Mexico",
      Ausbildung: "Zwillinge nach dem Spinellgesetz",
      Funddatum: "",
      Kaufdatum: "",
      Tauschdatum: "",
      Kauf_Tauschpreis: "",
      Wert_DM: "",
      Fotolink1: "",
      Fotolink2: ""
    }, {
      A_Code: "AgMin-Ag-1-1-19",
      Name: "Silber",
      Paragenese: "",
      Fundort: "Batopilas, Mexico",
      Ausbildung: "Zwillinge nach dem Spinellgesetz",
      Funddatum: "",
      Kaufdatum: "",
      Tauschdatum: "",
      Kauf_Tauschpreis: "",
      Wert_DM: "",
      Fotolink1: "",
      Fotolink2: ""
    }
  ]);
});

express.get("/all", (req: any, res: any) => {
  res.status(200).send(db);
});
