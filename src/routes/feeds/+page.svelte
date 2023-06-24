<script>
    import Title from '$lib/Title.svelte'
    export let data
</script>
<Title title="Feeds"></Title>

<ul>
    {#each data.feeds as feed}
        <li>{feed.title}</li>
    {:else}
        <li>No feeds found.</li>
    {/each}
</ul>