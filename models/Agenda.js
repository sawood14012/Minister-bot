const mongoose = require('mongoose');

const AgendasSchema = mongoose.Schema({
    ID: Number,
    Event: String,
    Local: String,
    Hour_Scheduled: String,
    Participants : Array,
    Image: String},
    {timestamps: true}
    
);

const Agenda = mongoose.model('Agenda', AgendasSchema)
module.exports = Agenda