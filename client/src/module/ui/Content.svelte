<script lang="ts">
    import {fetchMineralDB} from "../api/fetchMineral";
    import {storeKeyword} from "../store/storeSearch";
    import {storeContentPosition} from "../store/storeContent";
    import Load from "./Load.svelte";
    // @ts-ignore
    Object.prototype.getByIndex = function (index) {
        return this[Object.keys(this)[index]];
    };

    export let url: string = "http://localhost:8080/mineral";

    export async function buildContentModule(pos: number | undefined = undefined, url: string = "http://localhost:8080/mineral", keyword: string) {
        let out: string = "";
        const mineral: any = await fetchMineralDB(pos, `${url}/full/${keyword}`);
        out += `<p class="ContentElement" id="Content">`;
        if (pos != undefined) {
            if (pos > mineral.length) {
                $storeContentPosition = undefined;
            }
            for (let i = 0; i < Object.keys(mineral).length-2; i++) {
                if (!!mineral.getByIndex(i)) {
                    out += `${Object.keys(mineral)[i]}: ${mineral.getByIndex(i)}<br>`;
                }
            }
        }
        out += "</p>";
        return out;
    }
</script>

<style lang="sass">
  @import "../../global"
  p
    color: $header-color

  #wrapper
    position: fixed
    top: 0
    left: 50vw
    width: 50vw
    height: 100vh
    background-color: $module-color-50
    display: grid
    place-content: center
</style>

<div id="wrapper">
    {#await buildContentModule($storeContentPosition, url, $storeKeyword)}
        <Load/>
    {:then out}
        {@html out}
    {:catch err}
        <p>Mineral not found: <br>{err}
        <p>
    {/await}
</div>