<script lang="ts">
    import { onMount } from "svelte";
    import type { Todo } from "./models/types";
    import todoStore, {addTodo} from "./store/todo";
    
    let todoVal;

    let add = () => {
        addTodo({task: todoVal, done: false});
    };

    let disposer;
    onMount(() => {
        // disposer = todoStore.items.subscribe(tds => {
        //     console.log("val ch");
        //     todos = tds;
        // });
    })
    // onDestroy(() => disposer())

</script>

<input type="text" bind:value={todoVal}>
<button on:click={add}>Add</button>

{#each $todoStore as todo, i}
    <p>{todo.task}</p>
{/each}