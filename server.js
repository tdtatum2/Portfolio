const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Server used to send emails!
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server running."));

const contactEmail = nodemailer.createTransport({
    name: 'example.com',
    service: 'gmail',
    auth: {
        user: "finportfolio1@gmail.com",
        pass: "ohxpvyovlhibbpsk"
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send!");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + ' ' + req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "tdtatum2@gmail.com",
        subject: "Contact Form Submission — Portfolio",
        html:  `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`
    };
    contactEmail.sendMail(mail, (err, info) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(info);
            res.json({message: 'Message sent, thanks!', status: 200});
        };
        return res.sendStatus(200);
    });
});