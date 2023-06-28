export async function load(context) {
    const res = await context.fetch('http://127.0.0.1:8080/api/companies');
    const companies_data = await res.json();
    const companies = companies_data.companies;
    return {
        companies
    }
}