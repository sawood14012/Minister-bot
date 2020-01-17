const mongoose = require('mongoose');
const ResultadosSchema = mongoose.Schema({
    ID: Number,
    Title: String,
    Description: String,
    Image: String,
    Timestamps: {
        type: 'date'
    },
})
const Resultado = mongoose.model('Resultado', ResultadosSchema)
module.exports = Resultado