<script>
    import Title from '$lib/Title.svelte'
    export let data
</script>
<Title title="Sources"></Title>

<ul>
    {#each data.srcs as src}
        <li>{src.name}</li>
    {:else}
        <li>No sources found.</li>
    {/each}
</ul>