<script lang="ts">
    import Breadcrumbs from "$lib/Breadcrumbs.svelte";

    export let data

    export let crumbs = [
        { label: 'Home', link: '/' },
        { label: 'Gardens', link: '/gardens' },
        { label: `${data.garden.title}`, link: `/gardens/${data.garden.slug}` },
        { label: `${data.type_title}`, link: `/gardens/${data.garden.slug}/${data.type_slug}` },
        { label: `${data.page_title}`, link: `` },
    ]

</script>

<Breadcrumbs crumbs={crumbs}></Breadcrumbs>

<!-- https://tailwindcss.com/docs/typography-plugin -->
<div class="prose md:prose-md">
{@html data.markup}
</div>
