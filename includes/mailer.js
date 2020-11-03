
const nodeMailer = require('nodemailer');
var moment = require('moment-timezone');
require('dotenv').config();

//creating a test account with NodeMail with Ethereal
// let testAccount = nodeMailer.createTestAccount();

let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user:  process.env.EMAIL_ADDRESS, //`<TEST_USER>`, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD //`<TEST_PASSWORD>` // generated ethereal password
    }
});
const timestamp = moment().tz("Africa/Kampala").format()

const mailOptions = {
    from: `“Node Cron App” <appcron@gmail.com>`, // sender address
    to: `alexxsanya@gmail.com`, // list of receivers
    subject: `Hello there! - ${timestamp}`, // Subject line
    text: `A Message from Node Cron App, Report - ${timestamp}`, // plain text body
    html: `<b>A Message from Node Cron App</b>  - ${timestamp}` // html body
};

const sendMail = () =>
    transporter.sendMail(mailOptions, function (err, info) {
        
        if (err) {
            console.log(err);
        }else {
            console.log(info.messageId);
        }
    });

module.exports = {
    sendMail,
} 