import {NextApiRequest, NextApiResponse} from "next";
import filterDB from "../../../../app/modules/filterDB";

const db: any = require("../../../../app/db/mineral_data_german_211119.json");

export default function (req: NextApiRequest, res: NextApiResponse) {
    const {keyword} = req.query;
    //@ts-ignore
    res.json(filterDB(db, keyword));
}