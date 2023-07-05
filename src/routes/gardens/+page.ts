export async function load(context) {
    const response = await context.fetch('http://127.0.0.1:8080/api/gardens');
    const { gardens } = await response.json();
    return { gardens };
}