import { postData } from "./postModule"
import { getData } from "./getModule"

const currentApiUrl = 'https://api.weatherbit.io/v2.0/current?'
const futureApiUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?'
const apiKey = '&key=6ee45688665343cfaaea8d2cd299528a'

export async function getCurrentWeather(data) {
    getData(`${currentApiUrl}lat=${data.lat}&lon=${data.lng}${apiKey}`)
    .then( res => {
        postData('http://localhost:8081/add', {
            city: res.data[0].city_name,
            state: res.data[0].state_code,
            country: res.data[0].country_code,
            date: res.data[0].ob_time,
            weather: res.data[0].weather.description,
            temp: res.data[0].temp.toFixed(0)
        })
    })
}

export async function getFutureWeather(data) {
    getData(`${futureApiUrl}lat=${data.lat}&lon=${data.lng}${apiKey}&days=5`)
    .then( res => {
        for(let i = 0; i < res.data.length; i++) {
            postData('http://localhost:8081/add', {
                city: res.city_name,
                state: res.state_code,
                country: res.country_code,
                date: res.data[i].datetime,
                weather: res.data[i].weather.description,
                temp: res.data[i].temp.toFixed(0)
            })
        }
    })
}