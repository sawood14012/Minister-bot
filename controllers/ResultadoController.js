const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Resultado = mongoose.model('Resultado')
const Db = require('../models/Db')

// GET all Resultado
router.get('/', (req, res) => {
    // insert_resultado_record();
    Db.Resultado.find().exec((err, data) => {
        if (err) {
        } else {
            res.send(data);
        }
    });
})

function insert_resultado_record() {
//setting
var row1 = new Resultado({
    ID: 25,
    Title: 'title1',
    Description: 'desc',
    Image: 'img1',
    Timestamps: new Date().getTime()
});

// save model to database
row1.save(function (err, row1) {
    if (err) return console.error(err);
    console.log(row1.Name + " saved to Resultado collection.");
});
} 

module.exports = router;