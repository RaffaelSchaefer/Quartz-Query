import { fetchMineralDB } from "../intercommunication/fetchMineral.js";

// @ts-ignore
Object.prototype.getByIndex = function(index) {
  // @ts-ignore
  return this[Object.keys(this)[index]];
};

export async function buildMineralModule(pos: number = 0) {
  const url = "http://localhost:8080/all";

  const mineral: any = await fetchMineralDB(url, pos);

  const element = document.getElementById("content")!;
  const listElement = document.createElement("ul");
  const displayElement = document.createElement("div");
  displayElement.classList.add("displayElement");

  for (let i = 0; i < Object.keys(mineral).length; i++) {
    const tagACode = document.createElement("li");
    const textACode = document.createTextNode(`${Object.keys(mineral)[i]}: ${mineral.getByIndex(i)}`);
    tagACode.appendChild(textACode);
    tagACode.classList.add(`${Object.keys(mineral)[i]}_css`);
    listElement.appendChild(tagACode);
  }
  displayElement.appendChild(listElement);
  element.appendChild(displayElement);
}
