<script lang="ts">
    import Results from "./module/ui/Results.svelte";
    import Search from "./module/ui/Search.svelte";
    import {storeKeyword} from "./module/store/storeSearch";
</script>

<main>
    <Search/>
    <div id="wrapper">
        <Results pos={undefined} url={`http://localhost:8080/mineral/full/${$storeKeyword}`} />
    </div>
</main>

<style lang="sass">
  #wrapper
    position: absolute
    top: 70px
    left: 0
    height: 100vh
    width: 100vw
    display: grid
    place-items: center
    z-index: 0
</style>