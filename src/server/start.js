const app = require('./server')

const port = process.env.PORT || 8081
app.listen(port, () => { console.log(`The server is running on port ${port}`) })
console.log(__dirname)