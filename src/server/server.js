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
    // console.log(fetchedData)
})

// POST route
app.post('/add', postData)
function postData(req, res) {
    fetchedData['date'] = req.body.date
    fetchedData['city'] = req.body.city
    fetchedData['state'] = req.body.state
    fetchedData['country'] = req.body.country
    fetchedData['weather'] = req.body.weather
    fetchedData['temp'] = req.body.temp
    res.send(fetchedData)
    console.log(fetchedData)
}
// fetchedData.weather = weather
// console.log(fetchedData)