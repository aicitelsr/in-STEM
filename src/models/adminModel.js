const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    nome: { type: String },
    user: { type: String },
    email: { type: String },
    senha: { type: String }
},
{
    versionKey: false
});

const admin = mongoose.model('admin', adminSchema)

module.exports = admin