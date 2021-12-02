<script lang="ts">// @ts-ignore
import {fetchMineralDB} from "../api/fetchMineral";

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
        out += `<div class="ListElement" id="Result_${y}"><ul>`;
        for (let i = 0; i < Object.keys(mineral[y]).length - 2; i++) {
            if (!!mineral[y].getByIndex(i)) {
                out += `<li class="${Object.keys(mineral[y])[i]}_css">${Object.keys(mineral[y])[i]}: ${mineral[y].getByIndex(i)}</li>`;
            }
        }
        out += "</ul></div>";
    }
    return out;
}
</script>

<style lang="sass">
  @import "../../global"
</style>

{#await buildMineralModule(pos, url)}
    <p>Waiting...</p>
{:then out}
    {@html out}
{:catch err}
    <p>{err}<p>
{/await}