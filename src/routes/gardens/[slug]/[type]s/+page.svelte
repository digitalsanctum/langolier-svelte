<script lang="ts">
    import Title from '$lib/Title.svelte'
    import type {PageData} from "./$types"
    import Breadcrumbs from "$lib/Breadcrumbs.svelte";

    export let data: PageData

    export let crumbs = [
        { label: 'Home', link: '/' },
        { label: 'Gardens', link: '/gardens' },
        { label: `${data.garden.title}`, link: `/gardens/${data.garden.slug}` },
        { label: `${data.page_title}`, link: `/gardens/${data.garden.slug}` }
    ]

</script>

<Breadcrumbs crumbs="{crumbs}"></Breadcrumbs>
<Title title="{data.page_title}"></Title>

<ul class="list p-4">
    {#each data.pages as page}
        <li class="p-2 bg-primary-hover-token">
            <a href="{data.page_base_url}/{page.slug}">{page.title}</a>
        </li>
    {:else}
        <li>Empty list</li>
    {/each}
</ul>