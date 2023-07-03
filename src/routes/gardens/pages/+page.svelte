<script lang="ts">
    import Title from '$lib/Title.svelte'

    export let data

    export let markup = data.html

</script>

<Title title="Page"></Title>

{@html markup}
