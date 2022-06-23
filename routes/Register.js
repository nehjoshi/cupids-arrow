const mongoose = require("mongoose");
const router = require("express").Router();
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');

router.post('/users/register', async (req, res) => {
    const {email, firstName, lastName, date, country, gender} = req.body;
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "GMAIL",
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.PASSWORD
        },
        secure: true
    })
    const emailExists = await User.findOne({email: email})
    if (emailExists) return res.status(409).json({message: "Email already exists"});
    const newUser = new User({
        email, firstName, lastName, dateOfBirth: date, country, gender
    });
    await newUser.save()
    .then(() => {
        console.log("New user!")
        transporter.sendMail({
            from: "The Cupid's Arrow Team",
            to: email,
            subject: "Thank you for registering",
            html: `<b>Thank you for registering!</b>`
        })
        return res.status(200);
    })
    .catch(e => {
        console.log(e);
    })

});
module.exports = router;