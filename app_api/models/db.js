const mongoose = require('mongoose')

const dbURI = 'mongodb://caillef:caillef85@ds055935.mlab.com:55935/dbcryptoinfo'

mongoose.connect(dbURI)

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}.`)
})

mongoose.connection.on('error', err => {
    console.log(`Mongoose connection error: ${err}.`)
})

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected.`)
})

require('./appSchema')