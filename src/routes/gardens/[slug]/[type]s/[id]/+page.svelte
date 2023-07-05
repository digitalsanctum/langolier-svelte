<script lang="ts">
    import Title from '$lib/Title.svelte'

    export let data


</script>

<Title title="{data.page.title}"></Title>

{@html data.markup}
