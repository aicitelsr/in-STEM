const mongoose = require('mongoose')

const coursesSchema = mongoose.Schema({
    
    _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
    tituloCurso: { type: String, required: true, unique: true },
    categoria: { type: String, required: true },
    autorPostagem: { type: String, default: 'Não informado' },
    descrição: { type: String },
    inscriçõesAbertas: { type: Boolean, required: true },
    inscriçõesEncerradas: { type: Boolean, required: true },
    infosAdicionais: { type: String }

}, { timestamps: true })

const Model = mongoose.model('courses', coursesSchema)

module.exports = Model