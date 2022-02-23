import React from "react";
import {Mineral} from "../types/mineral";

const Item = (mineral: Mineral) => {
    return (
        <div
            className="z-1 m-2 p-1 h-fit md:h-auto w-full md:w-fit md:flex-auto rounded-lg bg-slate-200 shadow shadow-slate-600 ease-in-out duration-700">
            <h1>{mineral.Name}</h1>
            <p>{mineral.A_Code}</p>
            <p>{mineral.Paragenese}</p>
            <p>{mineral.Fundort}</p>
            <p>{mineral.Ausbildung}</p>
            <p>{mineral.Funddatum}</p>
            <p>{mineral.Kaufdatum}</p>
            <p>{mineral.Tauschdatum}</p>
            <p>{mineral.Kauf_Tauschpreis}</p>
            <p>{mineral.Wert_DM}</p>
        </div>
    );
};

export default Item;