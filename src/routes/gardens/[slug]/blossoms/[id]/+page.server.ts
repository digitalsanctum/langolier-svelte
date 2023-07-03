import { error } from '@sveltejs/kit';

/** @type {import('../../../../../../.svelte-kit/types/src/routes').PageServerLoad} */
export async function load({ fetch, params }) {
    const res = await fetch('http://127.0.0.1:8080/api/pages/' + params.id);
    const page = await res.json();

    if (page) {
        return page;
    }

    throw error(404, 'Not found');
}
