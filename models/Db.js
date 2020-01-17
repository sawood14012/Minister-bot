const mongoose = require('mongoose');
const DBURL = 'mongodb://localhost:27017/Minister-app'
var db = mongoose.connect(DBURL)
.then(() => console.log('mongoose up'))

const Minister = require('./Minister');
const Resultados = require('./Resultados');
const Agenda = require('./Agenda');
const Channel = require('./Channel');

module.exports.Minister = Minister
module.exports.Resultados = Resultados
module.exports.Agenda = Agenda
module.exports.Channel = Channel