const mongoose = require('mongoose');


const ChannelsSchema = mongoose.Schema({
    ID: Number,
    user_id: String,
    minisiter_id: String,
    uid: String,
})

const Channel = mongoose.model('Channel', ChannelsSchema)
module.exports.Channel = Channel