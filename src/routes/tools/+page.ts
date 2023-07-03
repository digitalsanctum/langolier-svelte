export async function load(context) {
    const res = await context.fetch('http://127.0.0.1:8080/api/tools');
    const tools_data = await res.json();
    const tools = tools_data.tools;
    return {
        tools
    }
}