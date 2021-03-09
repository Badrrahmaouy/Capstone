// GET route for express server
export async function getData(url) {
    const res = await fetch(url)
    try {
        const data = await res.json()
        return data
    } catch(err) {
        console.log('error', err)
    }
}