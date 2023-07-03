<script lang="ts">
    import Title from '$lib/Title.svelte'
    import type {PageData} from "./$types"


    export let data: PageData

</script>


<Title title="Garden Blossoms"></Title>

<ul class="list p-4">
    {#each data.pages as page}
        <li class="p-2 bg-primary-hover-token">
            {page.title}
        </li>
    {:else}
        <li>Empty list</li>
    {/each}
</ul>