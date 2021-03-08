import { getData } from "./getModule"
import { getImg } from "./getImg"
import { getCurrentWeather, getFutureWeather } from "./getWeather"

const geoUrl = 'http://api.geonames.org/geoCodeAddressJSON?q='
const geoKey = '&username=badrrahmaouy'

export function formHandler(event) {
    event.preventDefault()

    let address = document.getElementById('address').value
    const date = document.getElementById('date').value
    const day = parseInt(date[8] + date[9])
    const month = parseInt(date[5] + date[6])
    const today = new Date()
    const todayDay = today.getUTCDate()
    const todayMonth = today.getUTCMonth() + 1
    // get coord
    getData(geoUrl + address + geoKey)
    .then(res => {
        const data = { lat: res.address.lat, lng: res.address.lng }
        return data
    }).then(data => {
        if(month - todayMonth >= 0 && day - todayDay >= 0) {
            if(day - todayDay <= 7 && day - todayDay >0) {
                getCurrentWeather(data)
                console.log('day weather')
                getImg(address)
                reset()
                updateUI()
            } else {
                getFutureWeather(data)
                console.log('future weather');
                getImg(address)
            }
        } else {
            alert("You can't travel in the past!\nAre you Martin McFly?")
        }
    }) 
}

function updateUI() {
    getData('http://localhost:8081/all')
    .then(res => {
        console.log(res)
        const myFrag = document.createDocumentFragment()
        const weather = document.getElementById('weather')
        let i = 0
        for(let key of Object.keys(res)) {
            console.log(Object.values(res)[i])
            const newElement = document.createElement('div')
            newElement.setAttribute('class','fetch')
            newElement.innerHTML = `${key}: ${Object.values(res)[i]}`
            myFrag.appendChild(newElement)
            i++
        }
        weather.appendChild(myFrag)
    })
}

function reset() {
    const fetch = document.getElementsByClassName('fetch')
    for(let el of fetch) {
        el.innerHTML = ''
    }

}