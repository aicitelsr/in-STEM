const DATABASE_URI = 'mongodb+srv://letbatista2:hRpDSF65871@cluster0.qyzo3.mongodb.net/Projetinhoreprogramafinale'

const mongoose = require('mongoose')

const connect = async() => {
    try {
        await mongoose.connect(DATABASE_URI, {
            useNewUrlParser: true,

            useUnifiedTopology: true
        })

        console.log('banco conectado! ')
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    connect
}