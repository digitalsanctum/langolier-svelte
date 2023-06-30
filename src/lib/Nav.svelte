<script lang="ts">
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';
</script>

<!-- icons: https://fontawesome.com/search -->

<TabGroup
        justify="justify-center"
        active="variant-filled-primary"
        hover="hover:variant-soft-primary"
        flex="flex-1 lg:flex-none"
        rounded=""
        border=""
        class="bg-surface-100-800-token w-full"
>
    <TabAnchor href="/" selected={$page.url.pathname === '/'}>
        <svelte:fragment slot="lead"><i class="fa-solid fa-house-chimney"></i></svelte:fragment>
        <span>Home</span>
    </TabAnchor>
    <TabAnchor href="/companies" selected={$page.url.pathname === '/companies'}>
        <svelte:fragment slot="lead"><i class="fa-sharp fa-solid fa-building"></i></svelte:fragment>
        <span>Companies</span>
    </TabAnchor>
    <!--<TabAnchor href="/types" selected={$page.url.pathname === '/types'}>
        <svelte:fragment slot="lead">(icon)</svelte:fragment>
        <span>Types</span>
    </TabAnchor>
    <TabAnchor href="/sources" selected={$page.url.pathname === '/sources'}>
        <svelte:fragment slot="lead">(icon)</svelte:fragment>
        <span>Sources</span>
    </TabAnchor>
    <TabAnchor href="/feeds" selected={$page.url.pathname === '/feeds'}>
        <svelte:fragment slot="lead">(icon)</svelte:fragment>
        <span>Feeds</span>
    </TabAnchor>-->
    <TabAnchor href="/data" selected={$page.url.pathname === '/data'}>
        <svelte:fragment slot="lead"><i class="fa-solid fa-database"></i></svelte:fragment>
        <span>Data</span>
    </TabAnchor>
    <TabAnchor href="/models" selected={$page.url.pathname === '/models'}>
        <svelte:fragment slot="lead"><i class="fa-solid fa-diagram-project"></i></svelte:fragment>
        <span>Models</span>
    </TabAnchor>
    <TabAnchor href="/tools" selected={$page.url.pathname === '/tools'}>
        <svelte:fragment slot="lead"><i class="fa-solid fa-screwdriver-wrench"></i></svelte:fragment>
        <span>Tools</span>
    </TabAnchor>
    <TabAnchor href="/agents" selected={$page.url.pathname === '/agents'}>
        <svelte:fragment slot="lead"><i class="fa-solid fa-robot"></i></svelte:fragment>
        <span>Agents</span>
    </TabAnchor>
    <TabAnchor href="/editor" selected={$page.url.pathname === '/editor'}>
        <svelte:fragment slot="lead"><i class="fa-solid fa-pen-fancy"></i></svelte:fragment>
        <span>Editor</span>
    </TabAnchor>
</TabGroup>


<style>
</style>