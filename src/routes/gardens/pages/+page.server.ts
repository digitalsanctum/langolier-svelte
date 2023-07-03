import {compile} from 'mdsvex';

export async function load(context) {
    const res = await context.fetch('http://127.0.0.1:8080/api/pages/e01e9c8e-1291-4fc3-9d32-15ed3611fbcd');
    const mu = await res.json()
        .then(data => data.content)
        .then(md => compile(md));
    const html = mu.code;
    console.log(html);
    return {
        html
    };
}