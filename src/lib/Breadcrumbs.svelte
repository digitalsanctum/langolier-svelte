<script>
    export let crumbs = [{
        label: 'Home',
        link: '/'
    }];
</script>

<!-- https://www.skeleton.dev/elements/breadcrumbs#using-each-loops -->

<ol class="breadcrumb">
    {#each crumbs as crumb, i}
        {#if i < crumbs.length - 1}
            <li class="crumb"><a href="{crumb.link}">{crumb.label}</a></li>
            <li class="crumb-separator" aria-hidden>&rsaquo;</li>
        {:else}
            <li class="crumb">{crumb.label}</li>
        {/if}
    {/each}
</ol>
<hr/>