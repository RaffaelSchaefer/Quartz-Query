<script lang="ts">
    import Results from "./module/ui/Results.svelte";
    import Search from "./module/ui/Search.svelte";
    import {storeIdentifier, storeKeyword} from "./module/store/storeSearch";
</script>

<main>
    <div id="wrapper">
        <Search/>
        <Results pos={undefined} url={`http://localhost:8080/mineral/filtered/${$storeIdentifier}/${$storeKeyword}`} />
    </div>
</main>

<style lang="sass">
  #wrapper
    position: absolute
    top: 0
    left: 0
    height: 100vh
    width: 100vw
    display: grid
    place-items: center
    z-index: 0
</style>