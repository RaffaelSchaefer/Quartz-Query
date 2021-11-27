import { fetchMineralDB } from "../intercommunication/fetchMineral.js";

// @ts-ignore
Object.prototype.getByIndex = function (index) {
  // @ts-ignore
  return this[Object.keys(this)[index]];
};

export async function buildMineralModule(
  img: boolean,
  pos: number = 0,
  destination: string
) {
  const url = "http://localhost:8080/all";

  const mineral: any = await fetchMineralDB(url, pos);

  const element = document.getElementById(destination)!;
  const listElement = document.createElement("ul");
  const displayElement = document.createElement("div");
  displayElement.classList.add("displayElement");

  for (let i = 0; i < Object.keys(mineral).length - 2; i++) {
    if (!!mineral.getByIndex(i)) {
      const tag = document.createElement("li");
      const text = document.createTextNode(
        `${Object.keys(mineral)[i]}: ${mineral.getByIndex(i)}`
      );
      tag.appendChild(text);
      tag.classList.add(`${Object.keys(mineral)[i]}_css`);
      listElement.appendChild(tag);
    }
  }
  if (img) {
    for (
      let i = Object.keys(mineral).length;
      i > Object.keys(mineral).length - 2;
      i--
    ) {
      if (!!mineral.getByIndex(i)) {
        const tag = document.createElement("img");
        tag.classList.add(`${Object.keys(mineral)[i]}_css`);
        tag.src = mineral.getByIndex(i);
        listElement.appendChild(tag);
      }
    }
  }
  displayElement.appendChild(listElement);
  displayElement.setAttribute("id", `${pos}`);
  element.appendChild(displayElement);
}
