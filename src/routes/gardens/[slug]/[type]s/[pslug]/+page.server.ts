import {compile} from 'mdsvex';
import {error} from "@sveltejs/kit";

export async function load({ fetch, params }) {

    const garden_res = await fetch('http://127.0.0.1:8080/api/gardens/' + params.slug);
    const garden = await garden_res.json();
    if (garden) {
        const url = 'http://127.0.0.1:8080/api/pages/' + params.pslug
        const res = await fetch(url);
        const page = await res.json();
        const markup = await compile(page.content).then(html => html.code);
        const page_title = page.title;
        const type_slug = params.type + 's';
        const type_title = params.type.slice(0,1).toUpperCase() + params.type.slice(1) + 's';
        return {
            garden,
            markup,
            page_title,
            type_title,
            type_slug
        }
    }

    throw error(404, 'Not found');

}