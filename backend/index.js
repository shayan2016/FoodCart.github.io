const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express()
const port = 5000

app.use(express.json())

 //avaialble routes and all routing done here
 app.use('/api/auth',require('./routes/auth'))
 app.use('/api/MenuControll',require('./routes/MenuControll'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})