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
        let count: number = 0;
        const mineral: any = await fetchMineralDB(pos, `${url}/full/${keyword}`);
        out += `<div class="ContentElement" id="Content">`;
        if (pos != undefined) {
            if (pos > mineral.length) {
                $storeContentPosition = undefined;
            }
            for (let i = 0; i < Object.keys(mineral).length-2; i++) {
                if (!!mineral.getByIndex(i)) {
                    if (count === 0) {
                        out += `<h4 class="ContentHeader">${Object.keys(mineral)[i]}: ${mineral.getByIndex(i)}<br></h4>`;
                    }else {
                        out += `<p>${Object.keys(mineral)[i]}: ${mineral.getByIndex(i)}<br></p>`;
                    }
                    count++;
                }
            }
        }
        out += "</div>";
        return out.replace(new RegExp('(^|)(' + keyword + ')(|$)','ig'), '$1<b style="background-color:yellow; box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;">$2</b>$3');
    }
</script>

<style lang="sass">
  @import "../../global"

  p
    color: $header-color

  h3
    padding-top: 10px
    padding-left: 5px

  #wrapper
    position: fixed
    top: 0
    left: 50vw
    width: 50vw
    height: 100vh
    padding-top: 65px
    background-color: $module-color-50
</style>

<div id="wrapper">
    <h3>Vorschau</h3>
    <div class="centerContainer">
        {#await buildContentModule($storeContentPosition, url, $storeKeyword)}
            <Load/>
        {:then out}
            {@html out}
        {:catch err}
            <p>Mineral not found: <br>{err}
            <p>
        {/await}
    </div>
    <h3>Fotos</h3>
</div>