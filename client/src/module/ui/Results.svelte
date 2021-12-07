<script lang="ts">// @ts-ignore
import {fetchMineralDB} from "../api/fetchMineral";
import {storeContentPosition} from "../store/storeContent";
import {storeError} from "../store/storeError";
import {storeKeyword} from "../store/storeSearch";
import Load from "./Load.svelte";

// @ts-ignore
Object.prototype.getByIndex = function (index) {
    return this[Object.keys(this)[index]];
};

export let pos: number | undefined = undefined;
export let url: string = "http://localhost:8080/mineral";

export async function buildMineralModule(pos: number | undefined = undefined, url: string = "http://localhost:8080/mineral") {
    let out: string = "";
    const mineral: any = await fetchMineralDB(pos, url);
    for (let y = 0; y < mineral.length; y++) {
        out += `<div class="ListElement" id="${y}"><ul>`;
        for (let i = 0; i < Object.keys(mineral[y]).length - 2; i++) {
            if (!!mineral[y].getByIndex(i)) {
                out += `<li class="${Object.keys(mineral[y])[i]}_css">${Object.keys(mineral[y])[i]}: ${mineral[y].getByIndex(i)}</li>`;
            }
        }
        out += "</ul></div>";
    }
    if (out == "") {
        $storeError = true;
    }
    return out.replace(new RegExp('(^|)(' + $storeKeyword + ')(|$)','ig'), '$1<b style="background-color:yellow; box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;">$2</b>$3');
}

export async function updatePos(url: string) {
    const mineral: any = await fetchMineralDB(undefined, url);
    for (let i = 0; i < mineral.length; i++) {
        let element = document.getElementById(`${i}`);
        element.addEventListener("click", () => {
            $storeContentPosition = Number(element.id);
        })
    }
}
</script>

<style lang="sass">
  @import "../../global"
</style>

{#await buildMineralModule(pos, url)}
    <Load/>
{:then out}
    {@html out}
    {#await updatePos(url)}
    {:then res}
    {:catch err}
    {/await}
{:catch err}
    <p>{err}
    <p>
{/await}