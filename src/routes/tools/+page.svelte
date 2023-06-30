<script>
    import Title from '$lib/Title.svelte'
    export let data
</script>
<Title title="Tools"></Title>

<ul>
    {#each data.tools as type}
        <li>{type.name}</li>
    {:else}
        <li>No tools found.</li>
    {/each}
</ul>

<hr/>

TODO:
<ul>
    <li>CRUD for LangChain tools</li>
</ul>