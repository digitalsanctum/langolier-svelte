<script lang="ts">
    import Title from '$lib/Title.svelte'

    export let data

</script>


<Title title="{data.garden.title}"></Title>


<ul class="list p-4">
    {#each data.pages.pages as page}
        <li class="p-2 bg-primary-hover-token">
            <a href="/gardens/{data.garden.slug}/{page.page_type}s/{page.slug}">{page.title} ({page.page_type})</a>
        </li>
    {:else}
        <li>Empty list</li>
    {/each}
</ul>