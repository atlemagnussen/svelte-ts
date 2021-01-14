<script>
	export let name;
	import Hello from "./Hello.svelte";
	import Input from "./Input.svelte";
	import TypeAhead from "./TypeAhead.svelte";
	import { timer } from 'rxjs'
    let tick = timer(0, 1000)
</script>

<main>
	<Hello input="lol" />
	<h1>Name: {name}</h1>
	Input: <Input />
	<TypeAhead />
	<!-- {$tick}
	{#if $tick > 5 && ($tick < 20 || $tick > 30)}
		<todos-list></todos-list>
	{/if} -->
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>