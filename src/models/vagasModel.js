const mongoose = require('mongoose')

const vagaSchema = mongoose.Schema({
    
    _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
    categoria: { type: String, required: true },
    tituloVaga: { type: String, required: true, unique: true },
    autorPostagem: { type: String, default: 'Não informado' },
    descriçãoVaga: { type: String, required: true },
    requisitos: { type: String, required: true },
    dataDePostagem: { type: Date }, vagaDisponível: { type: Boolean },

    // empresa: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: false,
    //     ref: ''
    //    }

}, { timestamps: true })

const Model = mongoose.model('vagas', vagaSchema)

module.exports = Model