<script lang="ts">
    import Title from '$lib/Title.svelte'
    export let form;
</script>
<Title title="Data"></Title>

{#if form?.success}
    <p>File uploaded</p>
{/if}

{#if form?.error}
    <p>Failed to upload</p>
{/if}

<form method="post" action="?/upload">
    <label for="file-upload">Select a file</label>
    <input type="file" id="file-upload" name="file-upload"/>
    <button type="submit">Upload</button>
</form>
