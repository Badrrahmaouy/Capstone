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
            } else {
                getFutureWeather(data)
            }
        } else {
            alert("You can't travel in the past!\nAre you Martin McFly?")
        }
    }) .then( () => {
        getImg(address)
    })
}