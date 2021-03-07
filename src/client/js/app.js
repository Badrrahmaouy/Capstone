import { postData } from "./postModule";

// const dotenv = require('dotenv').config()

export function formHandler(event) {
    event.preventDefault()

    let address = document.getElementById('address').value
    const date = document.getElementById('date').value
    postData('http://localhost:8081/add', {city: address, date: date})
}