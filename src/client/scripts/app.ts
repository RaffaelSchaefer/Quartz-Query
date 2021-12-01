//import { search } from "./module/ui/search.js";

/*window.onload = () => {
  document.getElementById("inputSubmit")!.addEventListener("click", () => {
    //@ts-ignore
    search(document.getElementById("inputIdentifier")!.value, document.getElementById("inputKeyword")!.value);
  });
};*/

import { buildMineralModule } from "./module/ui/buildMineralModule.js";

let scrollIndex: number = 0;

for (let i = 0; i < 10; i++) {
  // @ts-ignore
  if (true /*size.amount*/) {
    buildMineralModule(false, scrollIndex, "list");
    scrollIndex++;
  }
}

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  // @ts-ignore
  if (
    clientHeight + scrollTop >=
    scrollHeight - 5
    // && size.amount
  ) {
    buildMineralModule(false, scrollIndex, "list");
    scrollIndex++;
  }
});
