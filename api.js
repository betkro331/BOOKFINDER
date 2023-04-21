import express from 'express'
const api = express()

//Middleware
api.use( express.json() )

// Mongoose DB connector & ODM for MongoDB
import mongoose from 'mongoose'
const connection = "mongodb+srv://bettinakronbk:uuTQkIjIhqHBF3Ms@bookfinder.dxfmw9w.mongodb.net/test"

// Start webbserver and connect to DB 
api.listen(3480, () => {
  console.log('Connected to http://localhost:3480')
  mongoose.connect(connection, {dbName:'bookfinder'})
})


// ROUTES
import booksRouter from './routes/books.js'
api.use('/api/books', booksRouter)
