import { postData } from "./postModule"
import { getData } from "./getModule"
import { getCurrentWeather } from "./getWeather"

const apiUrl = 'http://api.geonames.org/geoCodeAddressJSON?q='
const apiKey = '&username=badrrahmaouy'

export function getCoord(city) {
    getData(apiUrl + city + apiKey)
    .then(res => {
        // const lat = res.address.lat
        // const lng = res.address.lng
        // console.log(lat, lng)
        const data = {lat: res.address.lat, lng: res.address.lng}
        return data
    }) .then( data => {
        // console.log(data)
        getCurrentWeather(data)
    })
}

