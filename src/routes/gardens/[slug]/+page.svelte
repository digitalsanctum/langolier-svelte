<script lang="ts">
    import Title from '$lib/Title.svelte'
    import PageData = App.PageData;

    export let data: PageData

</script>


<Title title="{data.garden.title}"></Title>


