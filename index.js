const express = require('express')
const app = express()
const fileRouter = require('./routes/fileUploadRouter')
const cors = require('cors')
const db = require('./database')

db()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('uploads'));
app.use('/api', fileRouter.routes)

app.listen(3000, console.log("Server is Running on Port No 3000..."))