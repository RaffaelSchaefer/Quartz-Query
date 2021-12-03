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

  input
    font-size: 12pt
    width: 45vw
    height: auto
    display: flex
    flex-flow: row
    border: solid 2px $header-color
    border-left-width: 10px
    color: $header-color
    background-color: $module-color-50
    padding: $default-padding
    margin: $default-margins
    box-shadow: $shadow-color 0 7px 5px 0
    z-index: 3
</style>

<div id="wrapper">
        <input type="text" id="keyword" name="keyword" bind:value={$storeKeyword}/>
</div>