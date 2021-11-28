import { buildMineralModule } from "./module/create/buildMineralModule.js";

let scrollIndex: number = 0;

// @ts-ignore
if (document.getElementById("searchTextInput")!.value == "") {
  for (let i = 0; i < 10; i++) {
    buildMineralModule(false, scrollIndex, "list");
    scrollIndex++;
  }
}

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (clientHeight + scrollTop >= scrollHeight - 5) {
    buildMineralModule(false, scrollIndex, "list");
    scrollIndex++;
  }
});
