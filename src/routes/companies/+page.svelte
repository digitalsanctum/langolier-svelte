<script lang="ts">
    import Title from '$lib/Title.svelte'
    import { superForm } from "sveltekit-superforms/client"
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
    import { z } from "zod"
    import type { PageData } from "./$types"

    export let data: PageData

    const newCompanySchema = z.object({
        name: z.string().min(1).max(100),
    })

    const { form, errors, enhance } = superForm(data.createForm, {
        taintedMessage: "Are you sure you want leave?",
        validators: newCompanySchema,
        resetForm: true
    })

    const {
        form: deleteForm,
        enhance: deleteEnhance,
    } = superForm(data.deleteForm, {
        resetForm: false
    })
</script>

<Title title="Companies"></Title>

<SuperDebug data="{$form}"></SuperDebug>

<article class="p-4">
    <!--<header>
        <h3 class="h3">New Company</h3>
    </header>-->

    <form method="POST" action="?/create" use:enhance>
        <div class="md:flex mb-6">
            <div class="md:w-1/5">
                <label for="name" class="label">
                    <span>Name</span>
                    <input type="text" class="input shadow border rounded" id="name" name="name" bind:value={$form.name} />
                </label>
            </div>
            <div class="md:w-1/5 px-10">
                <label for="url" class="label">
                    <span>URL</span>
                    <input type="text" class="input shadow border rounded" id="url" name="url" bind:value={$form.url} />
                </label>
            </div>
        </div>
        <div class="md:w-1/5">
            <button type="submit" class="btn variant-filled">Add</button>
        </div>
    </form>

</article>
<hr>
<ul class="list p-4">
    {#each data.companies as company}
        <form method="POST" action="?/delete" use:deleteEnhance>
            <input type="hidden" name="id" value={company.id} />
            <li class="p-2 bg-primary-hover-token">
                <span><i class="fa-sharp fa-solid fa-building"></i></span>
                <span class="flex-auto">{company.name}</span>
                <button name="delete" class="btn btn-sm variant-filled">
                    <span><i class="fa-solid fa-trash"></i></span>
                    <span>Delete</span>
                </button>
            </li>
        </form>
    {:else}
        <li>Empty list</li>
    {/each}
</ul>