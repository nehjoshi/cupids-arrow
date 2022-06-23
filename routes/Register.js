const mongoose = require("mongoose");
const router = require("express").Router();
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const crypto = require('crypto');

router.post('/users/register', async (req, res) => {
    const { email, firstName, lastName, date, country, gender } = req.body;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD
        },
    })
    const emailExists = await User.findOne({ email: email })
    if (emailExists) return res.status(406).send("Email already exists");
    const emailToken = await crypto.randomBytes(64).toString("hex");
    const newUser = new User({
        email, firstName, lastName, dateOfBirth: date, country, gender, emailToken
    });
    await newUser.save()
        .then(() => {
            console.log("New user!")
            transporter.sendMail({
                from: "The Cupid's Arrow Team",
                to: email,
                subject: "Thank you for registering",
                html: `<p>Dear ${firstName},</p>
            <p>Thank you for registering with Cupid's Arrow. We are excited to have you on board!</p>
            <p>Please click the link below to confirm your email address and complete your registration.</p>
            <p><a href="http://localhost:3000/confirmRegistration/${emailToken}">Confirm Email</a></p>
            <p>Thank you,</p>
            <b>The Team, Cupid's Arrow</b>`
            })
            console.log("Done!")
            return res.status(200).json({ success: true });
        })
        .catch(e => {
            console.log(e);
        })

});
router.get("/users/confirmEmailToken/:token", async (req, res) => {
    const { token } = req.params;
    const user = await User.findOne({ emailToken: token });
    if (!user) return res.status(404).send("User not found");
    user.emailToken = "";
    user.isVerified = true;
    await user.save()
        .then(() => {
            return res.status(200).json({ success: true });
        })
        .catch(e => {
            console.log(e);
        })
})
module.exports = router;