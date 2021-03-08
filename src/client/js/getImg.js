import { postData } from "./postModule"
import { getData } from "./getModule"

export function getImg(city) { 
    getData('http://localhost:8081/key')
    .then(function (res) {
        console.log(res)
    })
    // .then(function (data) {
    //     console.log(data)
    //     let key = data[2]
    //     console.log(key)
    //     return key
    // }) .then(function (key) { 
    //     const url = `https://pixabay.com/api/?key=${key}&q=${city}&image_type=photo`
    //     getData(url)
    // }) .then(function (data) {
    //     console.log(data)
    // })
}
