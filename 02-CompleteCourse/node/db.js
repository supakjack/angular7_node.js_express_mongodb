var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/jackmobiles_com',{useNewUrlParser: true})

mongoose.connection.on('connected',()=>{
    console.log('Mongoose default connection open')
})

mongoose.connection.on('error',(err)=>{
    console.log('Mongoose default connection error : '+err)
})

mongoose.connection.on('disconnected',()=>{
    console.log('Mongoose default connection disconnected')
})

process.on('SIGINT',()=>{
    mongoose.connection.close(()=>{
        console.log('Mongoose default connection disconnected through app terminal')
        process.exit(0)
    })
})