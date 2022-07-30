const mongoose = require('mongoose')

const vacancySchema = mongoose.Schema({
    
    _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
    categoria: { type: String, required: true },
    tituloVaga: { type: String, required: true, unique: true },
    autorPostagem: { type: String, default: 'Não informado' },
    descriçãoVaga: { type: String, required: true },
    requisitos: { type: String, required: true },
    dataDePostagem: { type: Date }, 
    vagaDisponível: { type: Boolean },


}, { timestamps: true })

const Model = mongoose.model('vacancies', vacancySchema)

module.exports = Model