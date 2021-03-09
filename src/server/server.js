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

// app ENDPOINT
const fetchedData = {}

// GET route 
app.get('/all', (req, res) => {
    res.send(fetchedData)
})

// POST route
app.post('/add', postData)
function postData(req, res) {
    fetchedData['Date'] = req.body.date
    fetchedData['City'] = req.body.city
    fetchedData['State'] = req.body.state
    fetchedData['Country'] = req.body.country
    fetchedData['Weather'] = req.body.weather
    fetchedData['Temp'] = req.body.temp + '˚'
    fetchedData['Trip-length'] = req.body.trip + ' day(s)'
    res.send(fetchedData)
}