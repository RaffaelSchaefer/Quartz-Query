import { fetchMineralDB } from "../intercommunication/fetchMineral.js";

// @ts-ignore
Object.prototype.getByIndex = function(index) {
  // @ts-ignore
  return this[Object.keys(this)[index]];
};

export async function buildMineralModule(pos: number = 0) {
  const url = "http://localhost:8080/all";

  const mineral: any = await fetchMineralDB(url, pos);

  const element = document.getElementsByTagName("ul")[0];

  for (let i = 0; i < Object.keys(mineral).length; i++) {
    const tagACode = document.createElement("li");
    const textACode = document.createTextNode(`${Object.keys(mineral)[i]}: ${mineral.getByIndex(i)}`);
    tagACode.appendChild(textACode);
    element.appendChild(tagACode);
  }
}
