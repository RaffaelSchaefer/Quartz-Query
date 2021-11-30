import {search} from "./module/ui/search";

document.getElementById("inputSubmit")!.addEventListener("click", () => {
  search(document.getElementById("inputIdentifier")!.innerHTML, document.getElementById("inputKeyword")!.innerHTML);
})
