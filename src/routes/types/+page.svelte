<script>
    import Title from '$lib/Title.svelte'
    export let data
</script>

<Title title="Source Types"></Title>

<ul>
    {#each data.types as type}
        <li>{type.name}</li>
    {:else}
        <li>No types found.</li>
    {/each}
</ul>