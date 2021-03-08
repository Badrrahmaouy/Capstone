import { postData } from "./postModule"
import { getData } from "./getModule"

const currentApiUrl = 'https://api.weatherbit.io/v2.0/current?'
const futureApiUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?'
const apiKey = '&key=6ee45688665343cfaaea8d2cd299528a'

export async function getCurrentWeather(data) {
    getData(`${currentApiUrl}lat=${data.lat}&lon=${data.lng}${apiKey}`)
    .then( res => {
    
    })
}

export async function getFutureWeather(data) {
    getData(`${futureApiUrl}lat=${data.lat}&lon=${data.lng}${apiKey}`)
}