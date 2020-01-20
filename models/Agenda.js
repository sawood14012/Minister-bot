const mongoose = require('mongoose');

const AgendasSchema = mongoose.Schema({
    ID: Number,
    Title: String,
    Description: String,
    Image: String},
    {timestamps: true}
    
);

const Agenda = mongoose.model('Agenda', AgendasSchema)
module.exports = Agenda