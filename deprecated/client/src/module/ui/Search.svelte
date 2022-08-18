<script lang="ts">
    import {storeKeyword} from "../store/storeSearch";
    import {storeError} from "../store/storeError";
    $: $storeError = !$storeKeyword;
    let input: string = "Silber";
    const onKeyPress = e => {
        if (e.charCode === 13) $storeKeyword = input;
    };
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
    border: solid 2px $header-color
    border-left-width: 10px
    font-size: 12pt
    width: 45vw
    height: auto
    display: flex
    flex-flow: row
    padding: $default-padding
    margin: $default-margins
    box-shadow: $shadow-color 0 7px 5px 0
    z-index: 3
    color: $header-color
    background-color: $module-color-50
    border-radius: 2.5px

  .error
    color: $error-color1
    border-color: $error-color1
    background-color: $error-color2
</style>

<div id="wrapper">
    <input type="text" class:error={$storeError} on:keypress={onKeyPress} bind:value={input}/>
</div>