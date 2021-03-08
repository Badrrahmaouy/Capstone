// API keys 
const dotenv = require('dotenv').config()
const keys = {
    'geo': process.env.geoUser, 
    'weather': process.env.weatherKey,
    'pixabay': process.env.pixabayKey
}
module.exports = keys
