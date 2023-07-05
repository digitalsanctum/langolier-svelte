import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
    const res = await fetch('http://127.0.0.1:8080/api/gardens/' + params.slug + '/pages?type=' + params.type);
    const pages_data = await res.json();
    const pages = pages_data.pages;
    const page_base_url = params.type + 's';
    const page_title = params.type.slice(0,1).toUpperCase() + params.type.slice(1) + 's';
    return {
        pages,
        page_title,
        page_base_url
    }
}
