import { fail } from "@sveltejs/kit"
import { z } from "zod"
import { superValidate } from "sveltekit-superforms/server"


const newCompanySchema = z.object({
    name: z.string().min(1).max(100),
    url: z.string().url(),
})

const deleteCompanySchema = z.object({
    id: z.string().uuid(),
})

///// Load //////////////////////////////////////////////////////////

export const load = async (event) => {
    const createForm = await superValidate(event, newCompanySchema)
    const deleteForm = await superValidate(event, deleteCompanySchema)
    return {
        createForm, deleteForm
    }
}

///// Form actions //////////////////////////////////////////////////


export const actions = {
    create: async ({request}) => {
        const createForm = await superValidate(request, newCompanySchema)
        console.log(createForm)

        if (!createForm.valid) return fail(400, { createForm })

        // post to api
        await fetch('http://127.0.0.1:8080/api/companies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createForm.data),
        })

        return { createForm }
    },
    delete: async ({request}) => {
        const deleteForm = await superValidate(request, deleteCompanySchema)
        console.log(deleteForm)

        if (!deleteForm.valid) return fail(400, { deleteForm })

        await fetch('http://127.0.0.1:8080/api/companies/' + deleteForm.data.id, {
            method: 'DELETE'
        })

        return {deleteForm}
    }
}