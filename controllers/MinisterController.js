const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Minister = mongoose.model('Minister')
const Db = require('../models/Db')

const dialogflow = require('dialogflow');
const uuid = require('uuid');

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(projectId = 'minister-lgkdat') {
    // A unique identifier for the given session
    const sessionId = uuid.v4();

    // Create a new session
    const sessionClient = new dialogflow.SessionsClient({
        keyFilename: "./Minister-66fd4df61571.json"
    });
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);

    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: 'hello minister',
                // The language used by the client (en-US)
                languageCode: 'en-US',
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
    } else {
        console.log(`  No intent matched.`);
    }
}



// GET all ministers
router.get('/', (req, res) => {
    var myFunc = runSample();

    myFunc.then(function () {
        console.log('Promise resolved');
    }).catch(function () {
        console.log('Promise rejected');
    });
    // Db.Minister.find({
    //     Status: 'Active'
    // }).exec((err, data) => {
    //     if (err) {} else {
    //         res.send(data);
    //     }
    // });
})

function insert_minister_record() {
    //setting
    var row1 = new Minister({
        Name: 'Minister 1',
        Image: 'Hello',
        ID: 25,
        Description: 'desc',
        Order: 5
    });

    // save model to database
    row1.save(function (err, row1) {
        if (err) return console.error(err);
        console.log(row1.Name + " saved to Minister collection.");
    });
}

module.exports = router;