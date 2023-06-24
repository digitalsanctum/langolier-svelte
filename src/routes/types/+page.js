export async function load(context) {
    const res = await context.fetch('http://127.0.0.1:8080/api/source_types');
    const types_data = await res.json();
    const types = types_data.types;
    return {
        types
    }
}