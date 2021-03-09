import { getData } from "./getModule"

const url = 'https://pixabay.com/api/?'
const urlKey = 'key=20560827-2583a0c3f9bf9a098c0a43c8e&q='
const imgType = '&image_type=photo'

// fetch for city image 
export async function getImg(city) { 
    getData(url + urlKey + city + imgType)
    .then(res => {
        const url = res.hits[0].webformatURL
        const img = document.getElementById('img')
        img.src = url
    })
}
