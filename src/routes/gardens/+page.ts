export async function load(context) {
    const response = await context.fetch('http://127.0.0.1:8080/api/gardens');
    const {gardens} = await response.json();
    const title = "Gardens";
    const crumbs = [{
        label: 'Home',
        link: '/'
    },{
        label: 'Gardens',
        link: '/gardens'
    }]
    return {
        gardens,
        title,
        crumbs
    };
}