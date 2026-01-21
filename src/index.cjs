const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

//TODO - endpoints
app.get('/hello', (req, res) => {
    return res.status(200).json({ message: 'Szeevasz!'})
})

const port = 3333;
var actualPort = process.env.PORT || port;
app.listen(actualPort, (err) => {
  console.log('Backend is running on port ', actualPort)
})