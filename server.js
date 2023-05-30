const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

require('dotenv').config();

const path = require('path');

const app = express();
const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const transport = {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

const router = express.Router();

router.post('/send', (req, res, next) => {
    try {
        const name = req.body.name;
        const phone = req.body.number;
        const email = req.body.email;
        const message = req.body.message;
        let content = {"Name": name , "Phone": phone, "Email": email, "Message": message}
        const mail = {
            from: transport.auth.user,
            to: 'dcheyrnak10@gmail.com',
            subject: 'New Message',
            text: `Name: ${name} \n Phone: ${phone} \n Email: ${email} \n Message: ${message} \n`
    };
        transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.error(err);
                res.json({
                    status: 'fail'
                });
            } else {
                res.json({
                    status: 'success'
                });
            }
        });
        res.status(200).send(content)
    } catch (error) {
        res.status(400).send(error.message);
        console.error(error);
    }
});

const http = require("http");
let server = http.createServer(app)

// const https = require('node:https');
// let server = https.createServer(app);

app.use(cors());
app.use(express.json());
app.use('/', router);
server.listen(port, host, () => {
    console.log(`Server is up!`)
});