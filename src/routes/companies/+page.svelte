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

    const { form, errors, enhance, constraints } = superForm(data.createForm, {
        taintedMessage: "Are you sure you want leave?",
        validators: newCompanySchema,
        resetForm: true
    })

    const {
        form: deleteForm,
        errors: deleteErrors,
        enhance: deleteEnhance,
        message: deleteMessage
    } = superForm(data.deleteForm, {
        resetForm: false
    })
</script>


<Title title="Companies"></Title>

<article>
    <header>
        <h1>New Company</h1>
    </header>
    <form method="POST" action="?/create" use:enhance>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" bind:value={$form.name} />
        {#if $errors.name}
            <small>{$errors.name}</small>
        {/if}
        <button type="submit">Add</button>
    </form>
</article>

<ul>
    {#each data.companies as company}
        <form method="POST" action="?/delete" use:deleteEnhance>
            <input type="hidden" name="id" value={company.id} />
            <li>{company.name} - <button name="delete">Delete</button></li>
        </form>
    {:else}
        <li>Empty list</li>
    {/each}
</ul>