<script lang="ts">
    import Title from '$lib/Title.svelte'
    import type {PageData} from "./$types"

    export let data: PageData

</script>

<Title title="{data.page_title}"></Title>

<ul class="list p-4">
    {#each data.pages as page}
        <li class="p-2 bg-primary-hover-token">
            <a href="{data.page_base_url}/{page.id}">{page.title}</a>
        </li>
    {:else}
        <li>Empty list</li>
    {/each}
</ul>