const mongoose = require('mongoose');

const AgendasSchema = mongoose.Schema({
    ID: Number,
    Title: String,
    Description: String,
    Image: String,
    Timestamps: {
        type: 'date'
    },
})

const Agenda = mongoose.model('Agenda', AgendasSchema)
module.exports = Agenda