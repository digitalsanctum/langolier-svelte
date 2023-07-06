<script lang="ts">
    import { superForm } from "sveltekit-superforms/client"
    import { z } from "zod"
    import type { PageData } from "./$types"
    import Title from "$lib/Title.svelte";
    import Breadcrumbs from "$lib/Breadcrumbs.svelte";
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

    export let data: PageData
    export let createPageForm
    export let deletePageForm


    const {
        errors,
        form: createForm,
        enhance: createEnhance,
        message
    } = superForm(createPageForm, {
        taintedMessage: "Are you sure you want leave?",
        resetForm: true
    })

    const {
        form: deleteForm,
        enhance: deleteEnhance,
    } = superForm(deletePageForm, {
        resetForm: false
    })

    export let crumbs = [
        { label: 'Home', link: '/' },
        { label: 'Gardens', link: '/gardens' },
        { label: data.garden.title, link: `/gardens/${data.garden.slug}` }
    ]

</script>
<Breadcrumbs crumbs="{crumbs}"></Breadcrumbs>
<Title title="{data.garden.title}"></Title>

<!--<SuperDebug data="{$createForm}"></SuperDebug>-->

<article class="p-4">

    {#if $message}
        <aside class="alert variant-ghost-warning">
            <!-- Icon -->
            <div><i class="fa-solid fa-triangle-exclamation"></i></div>
            <div class="alert-message">
<!--                <h3 class="h3">Warning!</h3>-->
                <p>{$message}</p>
            </div>
        </aside>
    {/if}

    <form method="POST" action="/gardens/{data.garden.slug}?/createPage" use:createEnhance>
        <input type="hidden" id="garden_id" name="garden_id" value={data.garden.id}  />
        <input type="hidden" id="publish" name="publish" value="false" />
        <div class="md:flex mb-6">
            <div class="md:w-1/5">
                <label for="title" class="label">
                    <span>Title</span>
                    <input type="text" class="input shadow border rounded" id="title" name="title" bind:value={$createForm.title} />
                </label>
            </div>
            <div class="md:w-1/5 px-10">
                <label for="slug" class="label">
                    <span>Slug</span>
                    <input type="text" class="input shadow border rounded" id="slug" name="slug" bind:value={$createForm.slug} />
                    {#if $errors.slug}<span class="invalid">{$errors.slug}</span>{/if}
                </label>
            </div>
            <div class="md:w-1/5 px-10">
                <label for="page_type" class="label">
                    <span>Type</span>
                    <input type="text" class="input shadow border rounded" id="page_type" name="page_type" bind:value={$createForm.page_type} />
                    {#if $errors.page_type}<span class="invalid">{$errors.page_type}</span>{/if}
                </label>
            </div>
        </div>
        <div class="md:flex mb-6">
            <div class="md">
                <label for="content" class="label">
                    <span>Content</span>
                    <textarea class="input shadow border rounded" id="content" name="content" bind:value={$createForm.content}></textarea>
                    {#if $errors.content}<span class="invalid">{$errors.content}</span>{/if}
                </label>
            </div>
        </div>
        <div class="md:w-1/5">
            <button type="submit" class="btn variant-filled">Add</button>
        </div>
    </form>
</article>

<hr/>

<ul class="list p-4">
    {#each data.pages.pages as page}
        <li class="p-2 bg-primary-hover-token">
            <a href="/gardens/{data.garden.slug}/{page.page_type}s/{page.slug}">{page.title} ({page.page_type})</a>
            <form method="POST" action="?/deletePage" use:deleteEnhance>
                <input type="hidden" name="slug" value={page.slug} />
                <button name="delete" class="btn btn-sm variant-filled">
                    <span><i class="fa-solid fa-trash"></i></span>
                    <span>Delete</span>
                </button>
            </form>
        </li>
    {:else}
        <li>Empty list</li>
    {/each}
</ul>