export async function load(context) {
    const res = await context.fetch('http://127.0.0.1:8080/api/companies');
    const {companies} = await res.json();
    return {companies};
}