import React, {useEffect, useState} from "react";
import {Mineral} from "../types/mineral";
import Item from "./Item";
import {apiURL} from "../constants/apiConstants";

const url = `${apiURL}mineral/search/`;

export default function Result() {
    const [loading, setLoading] = useState<boolean>(true);
    const [minerals, setMinerals] = useState<Mineral[] | undefined>(undefined);
    const [input, setInput] = useState<string>("Quartz");

    const wrapperStyle: string = "w-full h-full flex flex-wrap p-6 overflow-y-auto scrollbar-hide ease-in-out duration-700";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url + input);
            const data = await response.json();
            setMinerals(data);
            setLoading(false);
        };

        fetchData().catch(console.error);
    }, [input]);

    if (loading) {
        return (
            <div className={wrapperStyle}>
                <p className="text-5xl font-bold">LOADING</p>
            </div>
        );
    }

    if (!minerals) {
        return (
            <div className={wrapperStyle}>
                <p className="text-5xl font-bold">ERROR</p>
            </div>
        )
    }

    return (
        <div className={wrapperStyle}>
            {minerals.map((mineral) => (
                <Item A_Code={mineral.A_Code} Name={mineral.Name} Paragenese={mineral.Paragenese}
                      Fundort={mineral.Funddatum}
                      Ausbildung={mineral.Ausbildung} Funddatum={mineral.Funddatum} Kaufdatum={mineral.Kaufdatum}
                      Tauschdatum={mineral.Kaufdatum} Kauf_Tauschpreis={mineral.Kauf_Tauschpreis}
                      Wert_DM={mineral.Wert_DM}/>))}
        </div>
    );
}