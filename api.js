import express from 'express'
const api = express()

//Middleware
api.use( express.json() )

// Mongoose DB connector & ODM for MongoDB
import mongoose from 'mongoose'
const connection = "mongodb+srv://bettinakronbk:Izc61qit7CwsEXqP@holidayhomes.xpl8ugz.mongodb.net/test"

// Start webbserver and connect to DB 
api.listen(3456, () => {
  console.log('Connected to http://localhost:3456')
  // connect to db (med 2 argument, anslutningssträngen och val av db)
  mongoose.connect(connection, {dbName:'holidayhomes'})
})

// ROUTES

import homesRouter from './routes/homes.js'
api.use('/api/homes', homesRouter)
