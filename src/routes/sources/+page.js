export async function load(context) {
    const res = await context.fetch('http://127.0.0.1:8080/api/sources');
    const srcs_data = await res.json();
    const srcs = srcs_data.sources;
    return {
        srcs
    }
}