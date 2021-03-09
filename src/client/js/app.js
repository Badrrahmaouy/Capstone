import { getData } from "./getModule"
import { getImg } from "./getImg"
import { getCurrentWeather, getFutureWeather } from "./getWeather"

const geoUrl = 'http://api.geonames.org/geoCodeAddressJSON?q='
const geoKey = '&username=badrrahmaouy'

export function formHandler(event) {
    event.preventDefault()
    console.log(':::FORM SUBMITTED:::')

    let address = document.getElementById('address').value
    const date = document.getElementById('date_dep').value
    const retDate = document.getElementById('date_ret').value
   
    // time managing
    const day = parseInt(date[8] + date[9])
    const month = parseInt(date[5] + date[6])
    const year = parseInt(date[0] + date[1] + date[2] + date[3])
    const today = new Date()
    const todayDay = today.getUTCDate()
    const todayMonth = today.getUTCMonth() + 1
    const todayYear = today.getUTCFullYear()
    const date1 = new Date(date)
    const date2 = new Date(retDate)
    const diffDate = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)
    console.log('Trip length:', diffDate, 'day(s)')

    // get coord
    console.log('Fetching coordinates from GeoNames API...');
    getData(geoUrl + address + geoKey)
    .then(res => {
        const data = { lat: res.address.lat, lng: res.address.lng }
        console.log('Coordinates fetched!');
        return data
    }).then(data => {
        console.log('Fetching weather for your departure date...');
        if(month - todayMonth >= 0 && day - todayDay >= 0 && year - todayYear >= 0 && diffDate >= 0) {
            if(day - todayDay <= 7) {
                getCurrentWeather(data, diffDate)
                console.log('Current weather')
                getImg(address)
            } else {
                getFutureWeather(data, date, diffDate)
                console.log('Future weather')
                getImg(address)
            }
        } else {
            alert("You can't travel in the past!\nAre you Martin McFly?")
            console.log('Error with your input. Please insert a valid date to proced!');
        }
    }) 
}

export function updateUI() {
    getData('http://localhost:8081/all')
    .then(res => {
        console.log('Updating UI...');
        const myFrag = document.createDocumentFragment()
        const weather = document.getElementById('weather_data')
        const footer = document.getElementsByTagName('footer')
        let i = 0
        for(let key of Object.keys(res)) {
            const newElement = document.createElement('div')
            newElement.setAttribute('class','fetch')
            newElement.setAttribute('id', key)
            newElement.innerHTML = `${key}: ${Object.values(res)[i]}`
            myFrag.appendChild(newElement)
            i++
        }
        weather.appendChild(myFrag)
        console.log('UI updated!');
    })
}

export function reset() {
    const fetch = document.getElementsByClassName('fetch')
    for(let el of fetch) {
        el.innerHTML = ''
        el.style.content = ''
    }

}