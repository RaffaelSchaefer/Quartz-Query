<script lang="ts">// @ts-ignore
import {fetchMineralDB} from "../api/fetchMineral";

// @ts-ignore
Object.prototype.getByIndex = function (index) {
    return this[Object.keys(this)[index]];
};

let pos: number = 0;
let url: string = "http://localhost:8080/mineral";

export async function buildMineralModule(pos: number = 0, url: string = "http://localhost:8080/mineral") {
    let out: string = "";
    const mineral: any = await fetchMineralDB(pos, url);
    for (let i = 0; i < Object.keys(mineral).length; i++) {
        if (!!mineral.getByIndex(i)) {
            out += `<li>${Object.keys(mineral)[i]}: ${mineral.getByIndex(i)}</li>`;
        }
    }
    return out;
}
</script>

<style lang="sass">
  @import "../../global"
  div
    border: solid 2px $header-color
    border-left-width: 10px
    color: $header-color
    background-color: $module-color-50
    padding: 10px
    margin: 20px
    box-shadow: $shadow-color 0 7px 29px 0
    z-index: 1
</style>

<div>
    <ul>
        {#await buildMineralModule(pos, url)}
            <li>Waiting...</li>
        {:then out}
            <li>{@html out}</li>
        {:catch err}
            <li>ERROR: {err}</li>
        {/await}
    </ul>
</div>