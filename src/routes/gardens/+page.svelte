<script lang="ts">
    import { superForm } from "sveltekit-superforms/client"
    import { z } from "zod"
    import type { PageData } from "./$types"
    import Title from "$lib/Title.svelte";
    import Breadcrumbs from "$lib/Breadcrumbs.svelte";

    export let data: PageData

    const newGardenSchema = z.object({
        title: z.string().min(1).max(100),
        slug: z.string().min(1).max(100),
    })

    const { form, errors, enhance } = superForm(data.createForm, {
        taintedMessage: "Are you sure you want leave?",
        validators: newGardenSchema,
        resetForm: true
    })

    const {
        form: deleteForm,
        enhance: deleteEnhance,
    } = superForm(data.deleteForm, {
        resetForm: false
    })


</script>
<Breadcrumbs crumbs={data.crumbs} />
<Title title={data.title} />
<article class="p-4">
    <form method="POST" action="?/create" use:enhance>
        <div class="md:flex mb-6">
            <div class="md:w-1/5">
                <label for="title" class="label">
                    <span>Title</span>
                    <input type="text" class="input shadow border rounded" id="title" name="title" bind:value={$form.title} />
                </label>
            </div>
            <div class="md:w-1/5 px-10">
                <label for="slug" class="label">
                    <span>Slug</span>
                    <input type="text" class="input shadow border rounded" id="slug" name="slug" bind:value={$form.slug} />
                </label>
            </div>
        </div>
        <div class="md:w-1/5">
            <button type="submit" class="btn variant-filled">Add</button>
        </div>
    </form>
</article>

<hr>

<table>
    <thead>
    <tr>
        <th>Title</th>
    </tr>
    </thead>
    <tbody>
    {#each data.gardens as garden}
        <tr>
            <td>
                <span><i class="fa-solid fa-seedling"></i></span>
                <span class="flex-auto px-2"><a href="/gardens/{garden.slug}">{garden.title}</a></span>
            </td>
            <td>
                <form method="POST" action="?/delete" use:deleteEnhance>
                    <input type="hidden" name="slug" value={garden.slug} />
                <button name="delete" class="btn btn-sm variant-filled">
                    <span><i class="fa-solid fa-trash"></i></span>
                    <span>Delete</span>
                </button>
                </form>
            </td>
        </tr>
    {/each}
    </tbody>
</table>

<hr/>


TODO:

<p>A digital garden typically consists of the following major parts:</p>

<p>Nodes: Also referred to as "pages" or "articles," nodes are the building blocks of a digital garden. They are
    distinct units of knowledge, ideas, or thoughts that can stand on their own but can also be linked to other
    nodes.</p>

<p>Links: Links connect different nodes within the digital garden. They allow the reader to explore the content in a
    non-linear way, navigating from one node to another based on their interest or the connections between ideas.</p>

<p>Topics/Tags: Topics or tags categorize nodes into different subject areas or themes. They help to organize the
    content and make it easier to navigate.</p>

<p>Metadata: This is the additional information about each node, such as the creation date, last updated date, author,
    etc.</p>

<p>Graph View / Map: Some digital gardens offer a visual map or graph view, which displays the nodes and the connections
    between them. This provides a visual representation of the network of ideas within the garden.</p>

<p>In a digital garden, a topic can also be referred to as a "theme," "category," "tag," or "subject." It serves to
    group related nodes together, helping users navigate the garden and find content that interests them.</p>