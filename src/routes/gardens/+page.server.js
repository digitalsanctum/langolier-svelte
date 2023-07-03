export async function load(context) {
    const res = await context.fetch('http://127.0.0.1:8080/api/gardens');
    const gardens_data = await res.json();
    const gardens = gardens_data.gardens;
    return {
        gardens
    }
}