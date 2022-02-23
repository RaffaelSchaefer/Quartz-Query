import React, { useEffect, useState } from "react";
import { Mineral } from "../types/mineral";
import Item from "./Item";

const url = "http://localhost:3000/api/mineral/search/Columbit";

export default function Result() {

  const [loading, setLoading] = useState<boolean>(true);
  const [minerals, setMinerals] = useState<Mineral[] | undefined>(undefined);

  const wrapperStyle: string = "w-full h-full flex flex-wrap p-6 overflow-y-auto scrollbar-hide ease-in-out duration-700";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setMinerals(data);
      setLoading(false);
    };

    fetchData().catch(console.error);
  }, []);


  if (loading) {
    return <div className={wrapperStyle}>loading...</div>;
  }

  if (!minerals) {
    return <div className={wrapperStyle}>didn't get a mineral</div>;
  }

  return (
    <div className={wrapperStyle}>
      {minerals.map((mineral) => (<Item A_Code={mineral.A_Code} Name={mineral.Name} Paragenese={mineral.Paragenese} Fundort={mineral.Funddatum} Ausbildung={mineral.Ausbildung} Funddatum={mineral.Funddatum} Kaufdatum={mineral.Kaufdatum} Tauschdatum={mineral.Kaufdatum} Kauf_Tauschpreis={mineral.Kauf_Tauschpreis} Wert_DM={mineral.Wert_DM}/>))}
    </div>
  );
}