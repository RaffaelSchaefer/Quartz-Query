const minData = require('./minData.json');
const express = require('express');
//const mongodb = require('mongodb');

const router = express.Router();

//Get

router.get('/', (req, res) => {
    res.status(200).send(minData);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    if (0 < id < minData.length) {
        res.status(200).send(minData[id]);
    } else {
        res.status(404);
    }
});

router.get("/filter/:keyword", (req, res) => {
    const { keyword } = req.params;
    res.status(200).send([...new Set(fullFilterDB(minData, keyword))]);
});

router.get("/filter/:keyword/:id", (req, res) => {
    const { keyword, id } = req.params;
    res.status(200).send([...new Set(fullFilterDB(minData, keyword))][id]);
});

//Add

//Delete

//Functions

Object.prototype.getByIndex = function (index) {
    return this[Object.keys(this)[index]];
};

const fullFilterDB = (db, keyword) => {
    let out = "[";
    let regex = new RegExp(keyword, "i");
    for (let i = 0; i < 12; i++) {
        out += fullFilter(db, i, regex);
    }
    if (out != "[") {
        out = out.substring(0, out.length - 1);
        out += "]";
        return JSON.parse(out);
    }
};

function fullFilter(db, identifier, regex) {
    let result = "";
    for (let i = 0; i < db.length; i++) {
        if (db[i].getByIndex(identifier).match(regex, "i")) {
            result += JSON.stringify(db[i]) + ",";
        }
    }
    return result;
}

module.exports = router;