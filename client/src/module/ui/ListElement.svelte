<script lang="ts">
    // @ts-ignore
    Object.prototype.getByIndex = function (index) {
        // @ts-ignore
        return this[Object.keys(this)[index]];
    };
    import {fetchMineralDB} from "../api/fetchMineral";

    let pos: number = 0;
    let url: string = "http://localhost:8080/mineral"
    const output = async () => {
        let out: string = "";
        let mineral: any = await fetchMineralDB(url, pos);
        for (let i = 0; i < Object.keys(mineral).length; i++) {
            if (!!mineral.getByIndex(i)) {
                out += `<li class="${Object.keys(mineral)[i]}_css\`">${Object.keys(mineral)[i]}: ${mineral.getByIndex(i)}</li>`
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
    background-color: $module-color-50
    padding: 10px
    margin: 20px
    box-shadow: $shadow-color 0 7px 29px 0
    z-index: 1
</style>

<div>
    <ul>
        {@html output()}
    </ul>
</div>