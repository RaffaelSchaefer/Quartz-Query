<script lang="ts">
	import ListElement from "./module/ui/ListElement.svelte";
</script>

<main>
	<div id="wrapper">
		<ListElement></ListElement>
		<ListElement></ListElement>
		<ListElement></ListElement>
		<ListElement></ListElement>
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
</style>