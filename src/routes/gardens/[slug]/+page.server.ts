import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
    const garden_res = await fetch('http://127.0.0.1:8080/api/gardens/' + params.slug);
    const garden = await garden_res.json();

    if (garden) {
        const pages_res = await fetch('http://127.0.0.1:8080/api/gardens/' + params.slug + '/pages');
        const pages = await pages_res.json();
        return {
            garden,
            pages
        };
    }

    throw error(404, 'Not found');
}
