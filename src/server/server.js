const path = require('path')
const express = require('express')
const app = express()
app.use(express.static('dist'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

const port = 8081
app.listen(port, () => { console.log(`The server is running on port ${port}`)})
console.log(__dirname);

// app ENDPOINTS
const weather = []
const fetchedData = {}

// GET route 
app.get('/all', (req, res) => {
    res.send(fetchedData)
    console.log(fetchedData)
})

// POST route
app.post('/add', postData)
function postData(req, res) {
    weather.push(req.body.city)
    weather.push(req.body.state)
    weather.push(req.body.country)
    weather.push(req.body.date)
    weather.push(req.body.weather)
    weather.push(req.body.icon)
    weather.push(req.body.temp)
    fetchedData.weather = weather
    res.send(fetchedData)
    console.log(fetchedData)
}