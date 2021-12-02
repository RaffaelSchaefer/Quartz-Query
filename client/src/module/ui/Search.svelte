<script lang="ts">
    import {storeKeyword} from "../store/storeSearch";
</script>

<style lang="sass">
  @import "../../global"

  #wrapper
    z-index: 2
    position: fixed
    top: 0
    left: 0
    width: 100%
    display: grid
    place-content: center

  #searchBar
    width: 90vw
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
    padding-right: 10px

  input
    z-index: 3
    padding: 5px
    background-color: $module-color-50
    color: $header-color
    border: $header-color 2px solid
    border-left-width: 10px
</style>

<div id="wrapper">
    <form id="searchBar">
        <label for="keyword">Stichwort:</label>
        <input type="text" id="keyword" name="keyword" bind:value={$storeKeyword}/>
    </form>
</div>