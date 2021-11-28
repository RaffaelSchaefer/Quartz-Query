import { fetchMineralDB } from "../intercommunication/fetchMineral.js";

// @ts-ignore
Object.prototype.getByIndex = function (index) {
  // @ts-ignore
  return this[Object.keys(this)[index]];
};

export async function updateMineralContent(pos: number = 0) {
  const url = "http://localhost:8080/mineral";

  const mineral: any = await fetchMineralDB(url, pos);

  let info: string = "";

  for (let i = 0; i < Object.keys(mineral).length - 2; i++) {
    if (!!mineral.getByIndex(i)) {
      info += `${Object.keys(mineral)[i]}: ${mineral.getByIndex(i)}\n`;
    }
  }
  document.getElementById("contentCode")!.innerHTML = mineral.A_Code;
  document.getElementById("contentInfo")!.innerHTML = info;
}
