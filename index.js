const cron = require('node-cron');
const express = require('express');
const mail = require('./includes/mailer')

app = express();

/*
https://www.thirdrocktechkno.com/blog/how-to-set-up-a-cron-job-in-nodejs/

┌──────────────── second (optional) (Valid range 0-59)
| ┌────────────── minute (Valid range: 0-59)
| | ┌──────────── hour (valid range: 0-23)
| | | ┌────────── day of the month (Valid range: 1-31)
| | | | ┌──────── month (Valid range: 1-12)
| | | | | ┌────── day of the week (valid range: 0-7)
| | | | | | 
| | | | | |
* * * * * *
*/
/*
    * * * * * - runs every minute
    https://crontab.guru/#10_08_*_2_1 >>> tool to generate schedule parameter
*/
// schedule tasks to be run on the server
cron.schedule('* * * * *', function () {
    console.log('Running Cron Job');
    mail.sendMail()
});

app.listen(8000);