const cron = require('node-cron');
const express = require('express');
const mail = require('./includes/mailer')

app = express();

/*
    * * * * * - runs every minute
*/

// schedule tasks to be run on the server
cron.schedule('* * * * *', function () {
    console.log('Running Cron Job');
    mail.sendMail()
});

app.listen(8000);