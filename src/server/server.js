const path = require('path')
const express = require('express')
const app = express()
app.use(express.static('dist'))

// API keys 
// const dotenv = require('dotenv')
// const keys = [process.env.geo, process.env.weatherKey, process.env.pixabayKey]
// console.log(keys)
// app.get('/key', getKey)
// function getKey(req, res) {
//     res.send(keys)
// }

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

const port = 8081
app.listen(port, () => { console.log(`The server is running on port ${port}`)})
console.log(__dirname);
const fetchedData = []
// GET route 
app.get('/all', (req, res) => res.send(fetchedData))

// POST route
app.post('/add', postData)
function postData(req, res) {
    // console.log(req.body)
    fetchedData.push(req.body)
    res.send(fetchedData)
    console.log(fetchedData)
}