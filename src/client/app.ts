import { buildMineralModule } from "./scripts/module/create/buildMineralModule.js";

let scrollIndex = 0;

for (let i = 0; i < 10; i++) {
  buildMineralModule(false, scrollIndex);
  scrollIndex++;
}

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if(clientHeight + scrollTop >= scrollHeight - 5) {
    buildMineralModule(false, scrollIndex)
    scrollIndex++;
  }
});