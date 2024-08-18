const express = require('express')
require('dotenv').config()
const app = express()

const port = process.env.PORT

app.get('/',(req,res) => {
    res.send('Working')
})

app.listen(process.env.PORT, () => {
    console.log(`App running at port ${port}`)
})