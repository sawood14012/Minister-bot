const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
// const Minister = mongoose.model('Minister')
const Db = require('../models/Db')

// GET Tokerns
router.get('/', (req, res) => {
    // Db.Minister.find({Status: 'Active'}).exec((err, data) => {
    //     if (err) {} else {
    //         res.send(data);
    //     }
    // });
})

// function insert_minister_record() {
//     //setting
//     var row1 = new Minister({
//         Name: 'Minister 1',
//         Image: 'Hello',
//         ID: 25,
//         Description: 'desc',
//         Order: 5
//     });

//     // save model to database
//     row1.save(function (err, row1) {
//         if (err) return console.error(err);
//         console.log(row1.Name + " saved to Minister collection.");
//     });
// }

module.exports = router;