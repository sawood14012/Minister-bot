const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Agenda = mongoose.model('Agenda')
const Db = require('../models/Db')

// GET all Agenda
router.get('/', (req, res) => {
    // insert_agenda_record();
    Db.Agenda.find().exec((err, data) => {
        if (err) {
        } else {
            res.send(data);
        }
    });
})

function insert_agenda_record() {
//setting
var row1 = new Agenda({
    ID: 25,
    Title: 'title1',
    Description: 'desc',
    Image: 'img1',
    Timestamps: new Date().getTime()
});

// save model to database
row1.save(function (err, row1) {
    if (err) return console.error(err);
    console.log(row1.Name + " saved to Agenda collection.");
});
} 

module.exports = router;