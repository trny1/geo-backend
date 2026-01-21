const express = require('express')
const cors = express()

app.use(cors())
app.use(express.json())



var actualPort = process.env.PORT || 3000;
app.listen(actualPort, (err) => {
  console.log('Backend is running on port ' + actualPort)
})