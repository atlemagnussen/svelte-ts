<script lang="ts">
    import { of, BehaviorSubject } from "rxjs";
    import { fromFetch } from "rxjs/fetch";
    import {
        map,
        concatMap,
        catchError,
        switchMap,
        startWith,
        debounceTime,
    } from "rxjs/operators";

    const typeAhead = new BehaviorSubject("");
    typeAhead.set = typeAhead.next;

    const books = typeAhead.pipe(
        debounceTime(350),
        switchMap((query) => {
        if (!query) {
            return of([]);
        }
        return fromFetch(`https://www.episodate.com/api/search?q=${query}`).pipe(
            switchMap((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return of({ error: true, message: `Error ${response.status}` });
            }
            }),
            catchError((err) => of({ error: true, message: err.message }))
        );
        }),
        startWith([])
    );
</script>

<h3>Type ahead demo</h3>
<input bind:value={$typeAhead} list="result" />
<datalist id="result">
    {#if $books && $books.tv_shows}
        {#each $books.tv_shows as show}
            <option value={show.name} />
        {/each}
    {/if}
</datalist>
<pre>{ JSON.stringify($books, null, 4)}</pre>
