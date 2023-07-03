import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
    const res = await fetch('http://127.0.0.1:8080/api/gardens/' + params.slug + '/pages');
    const pages_data = await res.json();
    const pages = pages_data.pages;
    return {
        pages
    }
}
