const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get

router.get('/', async (req, res) => {
    const minerals = await loadMineralCollection();
    res.status(200).send(await minerals.find({A_Code: {$ne: ""}}).sort({A_Code: 1}).toArray());
});

router.get('/:id', async (req, res) => {
    const minerals = await loadMineralCollection();
    res.status(200).send(await minerals.find({_id:  mongodb.ObjectId(req.params.id)}).sort({A_Code: 1}).toArray());
});

router.get("/filter/:keyword", async (req, res) => {
    const minerals = await loadMineralCollection();
    let arr = await minerals.find({ $text : { $search: req.params.keyword, $caseSensitive: false }}).sort({A_Code: 1}).toArray();
    res.status(200).send(arr);
});

//Add
router.post("/", async (req, res) => {
    const minerals = await loadMineralCollection();
    await minerals.insertOne({
        A_Code: req.body.A_Code,
        Name: req.body.Name,
        Paragenese: req.body.Paragenese,
        Fundort: req.body.Fundort,
        Ausbildung: req.body.Ausbildung,
        Fundatum: req.body.Fundatum,
        Kaufdatum: req.body.Kaufdatum,
        Tauschdatum: req.body.Tauschdatum,
        Kauf_Tauschpreis: req.body.Kauf_Tauschpreis,
        Wert_DM: req.body.Wert_DM
    })
    res.status(201).send;
})

//Delete

//Functions

async function loadMineralCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true});
    return client.db('Quartz-Query-Demo').collection('minerals');
}

module.exports = router;