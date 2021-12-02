<script lang="ts">
    import {storeIdentifier, storeKeyword} from "../store/storeSearch";
</script>

<style lang="sass">
  @import "../../global"
  div
    width: 90%
    height: auto
    display: flex
    flex-flow: row
    border: solid 2px $header-color
    border-left-width: 10px
    color: $header-color
    background-color: $module-color-50
    padding: $default-padding
    margin: $default-margins
    box-shadow: $shadow-color 0 7px 29px 0
    z-index: 2

  button
    margin: 10px
    padding: 10px
    background-color: $module-color-50
    border: solid 2px $header-color
    color: $header-color

  label
    color: $header-color

  input
    z-index: 2
    padding: 5px
    background-color: $module-color-50
    color: $header-color
    border: $header-color 2px solid
    border-left-width: 10px
</style>

<div>
    <form>
        <label for="identifier">Identifier:</label><br/>
        <input
                type="text"
                id="identifier"
                name="identifier"
                bind:value={$storeIdentifier}
        /><br/>
        <label for="keyword">Keyword:</label><br/>
        <input type="text" id="keyword" name="keyword" bind:value={$storeKeyword}/>
    </form>
</div>