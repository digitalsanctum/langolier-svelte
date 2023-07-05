import {compile} from 'mdsvex';

export async function load({ fetch, params }) {
    const url = 'http://127.0.0.1:8080/api/pages/' + params.pslug
    const res = await fetch(url);
    const page = await res.json();
    const markup = await compile(page.content).then(html => html.code);
    return {
        page,
        markup
    };
}