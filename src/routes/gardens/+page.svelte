<script>
    import Title from '$lib/Title.svelte'

    export let data
</script>
<Title title="Gardens"></Title>

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
                <span class="flex-auto px-2">{garden.title}</span>
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