// POST route for express server
    export async function postData (url = '', data = {}) {
        const res = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        try {
            const newData = await res.json();
            return newData;
        } catch (error) {
            console.log('error', error)
        }
    }