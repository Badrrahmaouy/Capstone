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
            // console.log(newData);
            return newData;
        } catch (error) {
            console.log('error', error);
        }
    }