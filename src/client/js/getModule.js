export async function getData(url) {
    const res = await fetch(url)
    try {
        const data = await res.json()
        console.log(data)
        return data
    } catch(err) {
        console.log('error', err)
    }
}