<script>
    import Title from '$lib/Title.svelte'
    export let data
</script>
<Title title="Editor"></Title>

<hr/>

TODO
<ul>
    <li>Edit markdown via?</li>
    <li>Edit notebooks via: Choose a Notebook Editor: There are several web-based notebook editors available that you can integrate into your SvelteKit app. One popular option is JupyterLab (https://jupyterlab.readthedocs.io/), which provides a flexible and extensible environment for editing notebooks. Other options include nteract (https://nteract.io/) and Hydrogen (https://nteract.io/hydrogen).</li>
    <li>Run Jupyter notebooks via: https://github.com/jupyter-server/kernel_gateway</li>
    <li>BinderHub (requires Kubernetes): https://binderhub.readthedocs.io/en/latest/overview.html</li>
    <li>Embed Observable notebooks (free only for public notebooks): https://observablehq.com/@observablehq/how-to-embed-a-notebook-in-a-react-app</li>
    <li>save versioned content (page) to db</li>
    <li>on page content change event: optionally publish to garden</li>
    <li>host separately?</li>
</ul>

<style>
</style>