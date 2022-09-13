const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/title', (req, res) => {
    res.send('Express Now!')
})

app.listen(port)