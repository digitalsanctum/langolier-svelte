import {fail} from "@sveltejs/kit"
import {z} from "zod"
import {superValidate} from "sveltekit-superforms/server"


const newPageSchema = z.object({
    title: z.string().min(1).max(100),
    slug: z.string().min(1).max(100),
    content: z.string().min(1),
    garden_id: z.string().min(1),
    page_type: z.string().min(1),
    published: z.boolean()
})

/*const deletePageSchema = z.object({
    slug: z.string(),
})*/

///// Load //////////////////////////////////////////////////////////

export const load = async (event) => {
    const createPageForm = await superValidate(event, newPageSchema)
    // const deletePageForm = await superValidate(event, deletePageSchema)
    return {
        createPageForm/*, deletePageForm*/
    }
}

///// Form actions //////////////////////////////////////////////////

/** @type {import('./$types').Actions} */
export const actions = {
    createPage: async ({request}) => {
        const createPageForm = await superValidate(request, newPageSchema)
        console.log(createPageForm)

        if (!createPageForm.valid) {
            console.log("boo");
            return fail(400, {createPageForm})
        }

        // post to api
        await fetch('http://127.0.0.1:8080/api/pages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createPageForm.data),
        })

        return {createPageForm}
    }/*,
    deletePage: async ({request}) => {
        const deletePageForm = await superValidate(request, deletePageSchema)
        console.log(deletePageForm)

        if (!deletePageForm.valid) return fail(400, { deletePageForm })

        await fetch('http://127.0.0.1:8080/api/pages/' + deletePageForm.data.slug, {
            method: 'DELETE'
        })

        return {deletePageForm}
    }*/
}
