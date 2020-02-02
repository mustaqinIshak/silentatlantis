'use strict'

require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port= process.env.PORT
const router = require('./routers/index')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/eCommerce', router)
app.use(errorHandler)
app.listen(port, () => console.log(`app listen on port ${port}`))