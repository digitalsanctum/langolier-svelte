<script>
    import Title from '$lib/Title.svelte'
    import Markdown from 'svelte-exmarkdown';
    // import Markdown from 'svelte-exmarkdown';
    import { gfmPlugin } from 'svelte-exmarkdown/gfm';
    let md = '# Hello world!';
    export let data
</script>
<Title title="Editor"></Title>

<div id="editor">
<textarea bind:value={md}></textarea>
</div>
<div id="preview">
<Markdown {md} plugins="{[gfmPlugin]}" />
</div>


<hr/>

TODO
<ul>
    <li>save versioned content (page) to db</li>
    <li>on page content change event: optionally publish to garden</li>
    <li>host separately?</li>
</ul>

<style>
    div#editor {
        width: 48%;
        float: left;
        padding: 10px;
        margin: 12px;
    }
    textarea {
        width: 100%;
        min-height: 300px;
        max-height: 1000px;
        height: auto;
        overflow: auto;
        color: black;
        background: aliceblue;
        padding: 2px;
    }
    div#preview {
        width: 48%;
        height: auto;
        float: right;
        overflow: auto;
        padding: 10px;
        margin: 12px;
        border: 5px solid #666;
    }
</style>