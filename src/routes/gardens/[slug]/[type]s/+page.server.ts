import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {

    const garden_res = await fetch('http://127.0.0.1:8080/api/gardens/' + params.slug);
    const garden = await garden_res.json();
    if (garden) {
        const pages_res = await fetch('http://127.0.0.1:8080/api/gardens/' + params.slug + '/pages?type=' + params.type);
        const pages_data = await pages_res.json();
        const pages = pages_data.pages;
        const page_base_url = params.type + 's';
        const page_title = params.type.slice(0,1).toUpperCase() + params.type.slice(1) + 's';
        return {
            garden,
            pages,
            page_title,
            page_base_url
        }
    }

    throw error(404, 'Not found');

}
