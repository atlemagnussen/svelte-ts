<script lang="ts">
	export let input: string;
	import { authUser } from "./store/user";
</script>

<main>
	<h1>Hello {input}!</h1>
	<h2>{$authUser.name}</h2>
</main>
