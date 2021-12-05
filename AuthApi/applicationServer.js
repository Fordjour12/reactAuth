const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const logger = require('volleyball')
const helmet = require('helmet')
const mongoose = require('mongoose')

// folder Declearation
const middleware = require('./Middleware/errorMiddleware')

//routes Declearations
const authApi = require('./routes/auth.routes')

//Declearations
dotenv.config()

const app = express()

const port = process.env.PORT || 3003

//use middleware
app.use(logger)
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes initializations
app.use('api/v1', authApi)

//middleware handler
app.use(middleware.errorHandler)
app.use(middleware.notFound)

mongoose
	.connect(process.env.Mongo_Uri)
	// eslint-disable-next-line no-unused-vars
	.then((_result) => {
		app.listen(port, () => {
			console.log(`server in listerning on ${port}`)
		})
	})
	.catch((error) => console.log(error))
