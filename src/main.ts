import App from './App.svelte';
import "./Todos";
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;