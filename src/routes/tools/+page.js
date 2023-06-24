export async function load(context) {
    const res = await context.fetch('http://127.0.0.1:8080/api/sources');
    const tools_data = await res.json();
    const tools = tools_data.sources;
    return {
        tools
    }
}