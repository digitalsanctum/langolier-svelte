import { fail } from "@sveltejs/kit"
import { z } from "zod"
import { superValidate } from "sveltekit-superforms/server"


const newGardenSchema = z.object({
    title: z.string().min(2).max(200),
    slug: z.string().min(2).max(200),
})

const deleteGardenSchema = z.object({
    id: z.string().uuid(),
})

///// Load //////////////////////////////////////////////////////////

export const load = async (event) => {
    const createForm = await superValidate(event, newGardenSchema)
    const deleteForm = await superValidate(event, deleteGardenSchema)
    return {
        createForm, deleteForm
    }
}

///// Form actions //////////////////////////////////////////////////


export const actions = {
    create: async ({request}) => {
        const createForm = await superValidate(request, newGardenSchema)
        console.log(createForm)

        if (!createForm.valid) return fail(400, { createForm })

        // post to api
        await fetch('http://127.0.0.1:8080/api/gardens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createForm.data),
        })

        return { createForm }
    },
    delete: async ({request}) => {
        const deleteForm = await superValidate(request, deleteGardenSchema)
        console.log(deleteForm)

        if (!deleteForm.valid) return fail(400, { deleteForm })

        await fetch('http://127.0.0.1:8080/api/gardens/' + deleteForm.data.id, {
            method: 'DELETE'
        })

        return {deleteForm}
    }
}
