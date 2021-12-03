<script lang="ts">
    import Results from "./module/ui/Results.svelte";
    import Search from "./module/ui/Search.svelte";
    import Content from "./module/ui/Content.svelte"
    import {storeKeyword} from "./module/store/storeSearch";
</script>

<main>
    <div id="appContent">
        <div id="leftContent">
            <Search/>
            <div id="wrapper">
                <Results pos={undefined} url={`http://localhost:8080/mineral/full/${$storeKeyword}`} />
            </div>
        </div>
        <Content url={`http://localhost:8080/mineral`} />
    </div>
</main>

<style lang="sass">
  #appContent
    display: flex
    flex-flow: row
    height: 100vh
    width: 100vw
  #leftContent
    position: absolute
    top: 70px
    left: 0
    height: 100%
    width: 50vw
  #wrapper
    height: 100%
    width: 100%
    display: grid
    place-items: center
    z-index: 0
</style>