export async function load(context) {
    const res = await context.fetch('http://127.0.0.1:8080/api/feeds');
    const feeds_data = await res.json();
    const feeds = feeds_data.feeds;
    return {
        feeds
    }
}